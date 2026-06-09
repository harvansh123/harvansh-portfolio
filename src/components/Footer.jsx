import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-10 text-center"
      style={{ borderTop: '1px solid rgba(108,99,255,0.15)' }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-sm"
        style={{ color: '#9ca3af' }}
      >
        Designed & Built by{' '}
        <span className="gradient-text font-semibold">Harvansh Chaurasia</span> · {year}
      </motion.p>
      <p className="text-xs mt-2" style={{ color: '#6b7280' }}>
        Made with ❤️ using React, Three.js & Framer Motion
      </p>
    </footer>
  );
}
