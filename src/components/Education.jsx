import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'United College Of Engineering and Research,Prayagraj',
    period: '2022 – 2026',
    score: 'CGPA: 7.1',
    icon: '🎓',
    color: '#6c63ff',
    description: 'Studying core CS subjects including Data Structures, Algorithms, DBMS, OS, Machine Learning, and Web Development.',
  },
  {
    degree: 'Class XII — Science (PCM)',
    institution: 'R.R.B Public School, Prayagraj',
    period: '2021 – 2022',
    score: '66.8%',
    icon: '📗',
    color: '#00d4ff',
    description: 'Completed senior secondary education with Physics, Chemistry  and Mathematics.',
  },
  {
    degree: 'Class X',
    institution: 'ML. Public School, Prayagraj',
    period: '2019 – 2020',
    score: '68.2%',
    icon: '📘',
    color: '#ff6584',
    description: 'Completed secondary education with distinction in Science and Mathematics.',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      className="section-padding relative"
      ref={ref}
      style={{ background: 'rgba(10,15,46,0.5)' }}
    >
      {/* Glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)',
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
              Education
            </span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #6c63ff, transparent)' }} />
          </div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #6c63ff, #00d4ff, #ff6584)' }}
          />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex gap-8 items-start"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="hidden md:flex w-16 h-16 rounded-2xl items-center justify-center text-2xl flex-shrink-0 z-10"
                  style={{
                    background: `${edu.color}15`,
                    border: `2px solid ${edu.color}40`,
                    boxShadow: `0 0 20px ${edu.color}30`,
                  }}
                >
                  {edu.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-card p-6 flex-1 group"
                  style={{ border: `1px solid ${edu.color}25` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3
                        className="font-bold text-lg mb-1"
                        style={{ color: '#e8e8f0', fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-sm" style={{ color: '#9ca3af' }}>{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className="text-xl font-black"
                        style={{ color: edu.color, fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {edu.score}
                      </span>
                      <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                    {edu.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
