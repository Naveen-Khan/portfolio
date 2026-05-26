/**
 * Lightweight drop-in replacement for the subset of framer-motion APIs
 * used in this project. Animation responsibilities are handled by CSS,
 * Tailwind, and GSAP instead. This shim simply strips motion-specific
 * props and renders the underlying DOM element.
 */
import * as React from "react";

const MOTION_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "variants",
  "transition",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView",
  "viewport",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "dragTransition",
  "layout",
  "layoutId",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onHoverStart",
  "onHoverEnd",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onDrag",
  "onDragStart",
  "onDragEnd",
  "custom",
  "transformTemplate",
  "transformValues",
  "style",
]);

function cleanProps(props: Record<string, any>) {
  const out: Record<string, any> = {};
  const style: Record<string, any> = {};
  for (const key in props) {
    if (key === "style" && props.style && typeof props.style === "object") {
      for (const sk in props.style) {
        const v = props.style[sk];
        // motion values expose .get(); fall back to current value
        if (v && typeof v === "object" && typeof v.get === "function") {
          style[sk] = v.get();
        } else {
          style[sk] = v;
        }
      }
      continue;
    }
    if (MOTION_PROPS.has(key)) continue;
    out[key] = props[key];
  }
  if (Object.keys(style).length) out.style = style;
  return out;
}

const cache = new Map<string, React.ForwardRefExoticComponent<any>>();

function createMotionComponent(tag: string) {
  const cached = cache.get(tag);
  if (cached) return cached;
  const Comp = React.forwardRef<any, any>(({ children, ...rest }, ref) =>
    React.createElement(tag, { ...cleanProps(rest), ref }, children)
  );
  Comp.displayName = `motion.${tag}`;
  cache.set(tag, Comp);
  return Comp;
}

export const motion: any = new Proxy(
  {},
  {
    get: (_t, prop: string) => {
      if (prop === "custom") {
        return (Component: any) =>
          React.forwardRef<any, any>(({ children, ...rest }, ref) =>
            React.createElement(Component, { ...cleanProps(rest), ref }, children)
          );
      }
      return createMotionComponent(prop);
    },
  }
);

export const AnimatePresence: React.FC<{
  children?: React.ReactNode;
  mode?: string;
  initial?: boolean;
  onExitComplete?: () => void;
}> = ({ children }) => <>{children}</>;

export type Variants = Record<string, any>;
export type Transition = Record<string, any>;
export type MotionProps = Record<string, any>;

// --- Motion values (minimal) ---
class MotionValue<T = any> {
  private _value: T;
  private listeners = new Set<(v: T) => void>();
  constructor(initial: T) {
    this._value = initial;
  }
  get() {
    return this._value;
  }
  set(v: T) {
    this._value = v;
    this.listeners.forEach((l) => l(v));
  }
  on(_event: string, cb: (v: T) => void) {
    this.listeners.add(cb);
    return () => {
      this.listeners.delete(cb);
    };
  }
  onChange(cb: (v: T) => void) {
    return this.on("change", cb);
  }
}

export function useMotionValue<T>(initial: T) {
  const ref = React.useRef<MotionValue<T> | null>(null);
  if (!ref.current) ref.current = new MotionValue<T>(initial);
  return ref.current;
}

export function useSpring<T>(source: MotionValue<T> | T, _config?: any) {
  const initial =
    source && typeof (source as any).get === "function"
      ? (source as MotionValue<T>).get()
      : (source as T);
  const mv = useMotionValue<T>(initial);
  React.useEffect(() => {
    if (source && typeof (source as any).on === "function") {
      return (source as MotionValue<T>).on("change", (v) => mv.set(v));
    }
  }, [source, mv]);
  return mv;
}

export function useTransform<T = any, R = any>(
  source: MotionValue<T>,
  inputOrFn: any,
  output?: any
) {
  const compute = React.useCallback(
    (v: T): R => {
      if (typeof inputOrFn === "function") return inputOrFn(v);
      const input = inputOrFn as number[];
      const out = output as number[];
      const n = Number(v);
      if (n <= input[0]) return out[0] as R;
      if (n >= input[input.length - 1]) return out[out.length - 1] as R;
      for (let i = 0; i < input.length - 1; i++) {
        if (n >= input[i] && n <= input[i + 1]) {
          const t = (n - input[i]) / (input[i + 1] - input[i]);
          return (out[i] + t * (out[i + 1] - out[i])) as R;
        }
      }
      return out[0] as R;
    },
    [inputOrFn, output]
  );
  const mv = useMotionValue<R>(compute(source.get()));
  React.useEffect(() => {
    return source.on("change", (v) => mv.set(compute(v)));
  }, [source, compute, mv]);
  return mv;
}

export const useScroll = () => ({
  scrollY: useMotionValue(0),
  scrollX: useMotionValue(0),
  scrollYProgress: useMotionValue(0),
  scrollXProgress: useMotionValue(0),
});

export const useInView = () => true;
export const useAnimation = () => ({
  start: async () => {},
  stop: () => {},
  set: () => {},
});
