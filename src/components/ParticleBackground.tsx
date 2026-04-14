import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import { Float, Stars } from "@react-three/drei";

/* ── Neural Network Nodes with Connections ── */
const NeuralNetwork = () => {
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;
  const connectionDist = 2.8;

  const positions = useMemo(() => {
    const arr: { x: number; y: number; z: number; speed: number; offset: number }[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 14,
        z: (Math.random() - 0.5) * 10,
        speed: Math.random() * 0.2 + 0.05,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, []);

  const pointGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    positions.forEach((p, i) => {
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;
      sizes[i] = Math.random() * 3 + 1;
    });
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions]);

  const lineGeo = useMemo(() => {
    const maxLines = count * count;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(maxLines * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const posArr = pointGeo.attributes.position.array as Float32Array;

    positions.forEach((p, i) => {
      posArr[i * 3] = p.x + Math.sin(t * p.speed + p.offset) * 0.8;
      posArr[i * 3 + 1] = p.y + Math.cos(t * p.speed * 0.7 + p.offset) * 0.6;
      posArr[i * 3 + 2] = p.z + Math.sin(t * p.speed * 0.5) * 0.4;
    });
    pointGeo.attributes.position.needsUpdate = true;

    const linePos = lineGeo.attributes.position.array as Float32Array;
    let idx = 0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArr[i * 3] - posArr[j * 3];
        const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
        const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < connectionDist) {
          linePos[idx++] = posArr[i * 3];
          linePos[idx++] = posArr[i * 3 + 1];
          linePos[idx++] = posArr[i * 3 + 2];
          linePos[idx++] = posArr[j * 3];
          linePos[idx++] = posArr[j * 3 + 1];
          linePos[idx++] = posArr[j * 3 + 2];
        }
      }
    }
    lineGeo.setDrawRange(0, idx / 3);
    lineGeo.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef} geometry={pointGeo}>
        <pointsMaterial color="#00ffcc" size={0.06} transparent opacity={0.8} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial color="#00ffcc" transparent opacity={0.12} />
      </lineSegments>
    </>
  );
};

/* ── Floating Geometric Shapes ── */
const FloatingShape = ({ position, shape }: { position: [number, number, number]; shape: "torus" | "icosa" | "octa" }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.12;
    ref.current.rotation.y = t * 0.08;
    ref.current.rotation.z = t * 0.05;
  });

  const geo = useMemo(() => {
    switch (shape) {
      case "torus": return <torusGeometry args={[1.8, 0.03, 16, 100]} />;
      case "icosa": return <icosahedronGeometry args={[1.4, 1]} />;
      case "octa": return <octahedronGeometry args={[1, 0]} />;
    }
  }, [shape]);

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        {geo}
        <meshBasicMaterial color="#00ffcc" wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
};

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <fog attach="fog" args={["#000", 8, 25]} />
        <Stars radius={60} depth={60} count={2000} factor={3} saturation={0} fade speed={0.3} />
        <NeuralNetwork />
        <FloatingShape position={[5, 2, -4]} shape="torus" />
        <FloatingShape position={[-5, -2, -5]} shape="icosa" />
        <FloatingShape position={[0, 4, -6]} shape="octa" />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
