import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certs = [
  {
    title: 'Deloitte Certification',
    issuer: 'Deloitte',
    category: 'Technology',
    icon: '🏢',
    color: '#86efac',
    description: "Completed Deloitte's technology virtual experience covering data analytics and business solutions.",
    year: '2024',
  },
  {
    title: 'IBM Professional Certificate',
    issuer: 'IBM',
    category: 'Data Science & AI',
    icon: '💼',
    color: '#60a5fa',
    description: 'IBM certification in AI Fundamentals and Data Science methodologies.',
    year: '2024',
  },
  {
    title: 'IIT Kanpur — Web Development',
    issuer: 'IIT Kanpur',
    category: 'Web Development',
    icon: '🎓',
    color: '#f59e0b',
    description: "Completed IIT Kanpur's structured web development training program.",
    year: '2023',
  },
  {
    title: 'IIIT Allahabad — DSA',
    issuer: 'IIIT Allahabad',
    category: 'Algorithms & DSA',
    icon: '🧠',
    color: '#c084fc',
    description: 'Completed Data Structures and Algorithms training at IIIT Allahabad.',
    year: '2023',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #6c63ff)' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6c63ff' }}>
              Certifications
            </span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #6c63ff, transparent)' }} />
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Continuous learning through industry-recognized certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 group relative overflow-hidden cursor-default"
              style={{ border: `1px solid ${cert.color}25` }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${cert.color}15, transparent 70%)`,
                }}
              />

              {/* Badge */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  {cert.icon}
                </div>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: `${cert.color}20`, color: cert.color }}
                >
                  {cert.year}
                </span>
              </div>

              <h3
                className="font-bold text-sm mb-1 leading-snug"
                style={{ color: '#e8e8f0', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {cert.title}
              </h3>

              <p className="text-xs font-semibold mb-3" style={{ color: cert.color }}>
                {cert.issuer} · {cert.category}
              </p>

              <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>
                {cert.description}
              </p>

              {/* Verified badge */}
              <div className="flex items-center gap-1.5 mt-4">
                <div className="w-4 h-4 rounded-full flex items-center justify-center text-xs"
                  style={{ background: cert.color, color: '#000' }}>
                  ✓
                </div>
                <span className="text-xs font-medium" style={{ color: cert.color }}>Verified</span>
              </div>

              {/* Bottom gradient bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
