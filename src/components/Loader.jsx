import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let val = 0;
    const timer = setInterval(() => {
      val += Math.random() * 20 + 10;
      if (val >= 100) {
        val = 100;
        clearInterval(timer);
        setTimeout(onDone, 300);
      }
      setProgress(Math.min(val, 100));
    }, 80);
    // Safety timeout — 4 seconds max
    const safety = setTimeout(() => onDone(), 4000);
    return () => { clearInterval(timer); clearTimeout(safety); };
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: '#050816' }}
    >
      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#6c63ff' : '#00d4ff',
          }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="mb-8"
      >
        <div
          className="w-24 h-24 rounded-3xl flex items-center justify-center relative pulse-glow"
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.2))',
            border: '1px solid rgba(108,99,255,0.4)',
          }}
        >
          <span className="text-4xl font-black gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            HC
          </span>
          {/* Rotating border */}
          <div
            className="absolute inset-[-3px] rounded-3xl"
            style={{
              background: 'conic-gradient(from 0deg, #6c63ff, #00d4ff, transparent, #6c63ff)',
              animation: 'spin 2s linear infinite',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              padding: '3px',
            }}
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg font-semibold mb-8"
        style={{ color: '#c4c4d4', fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Harvansh Chaurasia
      </motion.p>

      {/* Progress bar */}
      <div className="w-64">
        <div
          className="h-1 rounded-full overflow-hidden mb-3"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #6c63ff, #00d4ff)',
              boxShadow: '0 0 10px rgba(108,99,255,0.5)',
            }}
          />
        </div>
        <p className="text-xs text-center" style={{ color: '#6b7280' }}>
          Loading... {Math.round(progress)}%
        </p>
      </div>
    </motion.div>
  );
}
