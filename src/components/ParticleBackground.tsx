import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Float, Stars } from "@react-three/drei";

const NeuralNodes = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 60;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        x: (Math.random() - 0.5) * 12,
        y: (Math.random() - 0.5) * 12,
        z: (Math.random() - 0.5) * 8,
        speed: Math.random() * 0.3 + 0.1,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    positions.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * p.speed + p.offset) * 0.5,
        p.y + Math.cos(t * p.speed + p.offset) * 0.5,
        p.z + Math.sin(t * p.speed * 0.5) * 0.3
      );
      dummy.scale.setScalar(0.03 + Math.sin(t * 2 + p.offset) * 0.01);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color="hsl(185, 80%, 55%)" transparent opacity={0.7} />
    </instancedMesh>
  );
};

const FloatingTorus = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.15;
    ref.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={[3, 1, -2]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshBasicMaterial color="hsl(185, 80%, 55%)" transparent opacity={0.2} />
      </mesh>
    </Float>
  );
};

const FloatingIcosahedron = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.1;
    ref.current.rotation.z = clock.getElapsedTime() * 0.08;
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={ref} position={[-3, -1, -3]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color="hsl(185, 80%, 55%)" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />
        <NeuralNodes />
        <FloatingTorus />
        <FloatingIcosahedron />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
