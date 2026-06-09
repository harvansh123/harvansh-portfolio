import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Stars, Float, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';

/* ── 3D Scene ─────────────────────────────────────────── */
function RotatingIcosahedron() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.5, 1]}>
        <MeshDistortMaterial
          color="#6c63ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Icosahedron>
      <Torus args={[2.4, 0.04, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.5} />
      </Torus>
      <Torus args={[2.8, 0.02, 16, 100]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#ff6584" transparent opacity={0.3} />
      </Torus>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#6c63ff" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#00d4ff" intensity={1} />
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <RotatingIcosahedron />
    </>
  );
}

/* ── Particles ────────────────────────────────────────── */
const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 3,
}));

/* ── Hero ─────────────────────────────────────────────── */
export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden animated-gradient grid-bg"
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.id % 3 === 0 ? '#6c63ff' : p.id % 3 === 1 ? '#00d4ff' : '#ff6584',
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Main Content ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* ── LEFT: Text ───────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-2"
                style={{
                  background: 'rgba(108,99,255,0.15)',
                  border: '1px solid rgba(108,99,255,0.3)',
                  color: '#a78bfa',
                }}
              >
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="section-title"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            >
              Hi, I'm{' '}
              <span className="gradient-text block">Harvansh Chaurasia</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start">
              <span
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.2))',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00d4ff',
                }}
              >
                &lt;Web Developer /&gt;
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mx-auto lg:mx-0"
              style={{ color: '#9ca3af', maxWidth: '520px' }}
            >
              Building intelligent and user-friendly web applications that make a difference.
              Passionate about crafting seamless digital experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                View Projects ✦
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-4 justify-center lg:justify-start">
              {[
                { value: '2+', label: 'Projects' },
                { value: '6+', label: 'Technologies' },
                { value: '4+', label: 'Certifications' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile Image + 3D ─────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative flex items-center justify-center flex-shrink-0"
            style={{ width: 'clamp(280px, 40vw, 420px)', height: 'clamp(280px, 40vw, 420px)' }}
          >
            {/* 3D Canvas — fills the container */}
            <div className="absolute inset-0 z-0">
              <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
              </Canvas>
            </div>

            {/* Profile image — centered, floating */}
            <motion.div
              className="relative z-10 flex items-center justify-center"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Rotating conic border */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: '-6px',
                  background: 'conic-gradient(from 0deg, #6c63ff, #00d4ff, #ff6584, #6c63ff)',
                  animation: 'spin 4s linear infinite',
                  borderRadius: '50%',
                }}
              />
              <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

              {/* Image */}
              <div
                className="relative overflow-hidden pulse-glow"
                style={{
                  width: 'clamp(200px, 28vw, 300px)',
                  height: 'clamp(200px, 28vw, 300px)',
                  borderRadius: '50%',
                  border: '4px solid var(--bg-primary)',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Harvansh Chaurasia"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                  onError={e => {
                    e.target.src = 'https://ui-avatars.com/api/?name=HC&background=6c63ff&color=fff&size=300&bold=true';
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute glass-card px-3 py-2 flex items-center gap-2"
                style={{ top: '8%', right: '-18%' }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-lg">⚡</span>
                <div>
                  <p className="text-xs font-semibold text-white">Web Dev</p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>React & More</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute glass-card px-3 py-2 flex items-center gap-2"
                style={{ bottom: '8%', left: '-18%' }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                <span className="text-lg">🤖</span>
                <div>
                  <p className="text-xs font-semibold text-white">AI / ML</p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>Enthusiast</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#9ca3af' }}>
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, #6c63ff, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
