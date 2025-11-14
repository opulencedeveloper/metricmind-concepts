"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// 3D Floating Shapes Background
export function Floating3DShapes() {
  const [shapes, setShapes] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    animateX: number[];
    animateY: number[];
  }>>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Generate shapes only on client side to avoid hydration mismatch
    const generatedShapes = Array.from({ length: 8 }, (_, i) => {
      const seed = i * 0.618033988749; // Golden ratio for consistent but varied distribution
      const size = 50 + (seed * 50) % 100;
      const x = (seed * 100) % 100;
      const y = ((seed * 137.508) % 100); // Another irrational number for distribution
      const duration = 15 + (seed * 20) % 20;
      const delay = (seed * 5) % 5;
      const animateX = [0, (seed * 200) % 200 - 100, 0];
      const animateY = [0, ((seed * 300) % 200) - 100, 0];
      
      return {
        id: i,
        size: Math.max(50, Math.min(150, size)),
        x: Math.max(5, Math.min(95, x)),
        y: Math.max(5, Math.min(95, y)),
        duration: Math.max(15, Math.min(35, duration)),
        delay: Math.max(0, Math.min(5, delay)),
        animateX,
        animateY,
      };
    });
    setShapes(generatedShapes);
  }, []);

  if (!isMounted) {
    return null; // Don't render on server
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-10"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            background: `radial-gradient(circle, rgba(30, 64, 175, 0.3) 0%, rgba(13, 148, 136, 0.1) 100%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: shape.animateX,
            y: shape.animateY,
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}

// 3D Card Component with Tilt Effect
export function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
      whileHover={{ scale: 1.05, z: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}

// 3D Rotating Cube
export function RotatingCube() {
  return (
    <motion.div
      className="relative w-32 h-32"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      animate={{ rotateY: 360, rotateX: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[
        { rotate: "rotateY(0deg)", color: "rgba(30, 64, 175, 0.3)" },
        { rotate: "rotateY(90deg)", color: "rgba(37, 99, 235, 0.3)" },
        { rotate: "rotateY(180deg)", color: "rgba(13, 148, 136, 0.3)" },
        { rotate: "rotateY(-90deg)", color: "rgba(20, 184, 166, 0.3)" },
        { rotate: "rotateX(90deg)", color: "rgba(30, 64, 175, 0.2)" },
        { rotate: "rotateX(-90deg)", color: "rgba(37, 99, 235, 0.2)" },
      ].map((face, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full border-2 border-white/20 rounded-lg"
          style={{
            background: face.color,
            transform: `${face.rotate} translateZ(64px)`,
            transformStyle: "preserve-3d",
            backdropFilter: "blur(10px)",
          }}
        />
      ))}
    </motion.div>
  );
}

// 3D Text Effect
export function Text3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rotateX = useTransform(
    useSpring(mousePosition.y, { stiffness: 300, damping: 30 }),
    [-1, 1],
    [15, -15]
  );
  const rotateY = useTransform(
    useSpring(mousePosition.x, { stiffness: 300, damping: 30 }),
    [-1, 1],
    [-15, 15]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <motion.div style={{ transform: "translateZ(50px)" }}>{children}</motion.div>
    </motion.div>
  );
}

// 3D Parallax Section
export function Parallax3D({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const y = (window.innerHeight - rect.top) * speed;
        setScrollY(y);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <motion.div
      ref={ref}
      style={{
        transform: `translateZ(${scrollY * 0.1}px) rotateX(${scrollY * 0.01}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}

// 3D Glowing Orb
export function GlowingOrb3D() {
  return (
    <motion.div
      className="relative w-64 h-64"
      animate={{
        rotateY: 360,
        rotateX: [0, 30, 0],
      }}
      transition={{
        rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
        rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.4) 0%, rgba(13, 148, 136, 0.2) 50%, transparent 100%)",
          filter: "blur(60px)",
          transform: "translateZ(0px)",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/20"
        style={{
          background: "conic-gradient(from 0deg, rgba(30, 64, 175, 0.3), rgba(13, 148, 136, 0.3), rgba(30, 64, 175, 0.3))",
          transform: "translateZ(30px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}

