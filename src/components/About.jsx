import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.1 },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px flex-1 max-w-12" style={{ background: 'linear-gradient(90deg, #6c63ff, transparent)' }} />
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6c63ff' }}>
            About Me
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title mb-12"
        >
          Know Who I <span className="gradient-text">Am</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image + decorations */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
              {/* Decorative rings */}
              <div
                className="absolute inset-[-10%]"
                style={{
                  border: '1px dashed rgba(108,99,255,0.3)',
                  borderRadius: '50%',
                  animation: 'spin 20s linear infinite',
                }}
              />
              <div
                className="absolute inset-[-3%]"
                style={{
                  border: '1px dashed rgba(0,212,255,0.2)',
                  borderRadius: '50%',
                  animation: 'spin 15s linear infinite reverse',
                }}
              />

              {/* Profile image */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="w-full h-full relative z-10"
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 0 50px rgba(108,99,255,0.45), 0 0 100px rgba(108,99,255,0.18)',
                  border: '4px solid rgba(108,99,255,0.5)',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Harvansh Chaurasia"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                  onError={e => {
                    e.target.src = 'https://ui-avatars.com/api/?name=HC&background=6c63ff&color=fff&size=300&bold=true';
                  }}
                />
              </motion.div>

              {/* Info cards */}
              <motion.div
                className="absolute glass-card p-3 text-center hidden md:block"
                style={{ top: '10px', right: '-15px', zIndex: 20 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-xl font-bold gradient-text">B.Tech</p>
                <p className="text-xs" style={{ color: '#9ca3af' }}>CSE Student</p>
              </motion.div>

              <motion.div
                className="absolute glass-card p-3 text-center hidden md:block"
                style={{ bottom: '10px', left: '-15px', zIndex: 20 }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                <p className="text-xl font-bold gradient-text-alt">7.1</p>
                <p className="text-xs" style={{ color: '#9ca3af' }}>CGPA</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6 text-center lg:text-left"
          >
            <p className="text-lg leading-relaxed" style={{ color: '#c4c4d4' }}>
              Motivated Computer Science student passionate about software development and
              intelligent systems. I enjoy building real-world applications and solving
              problems using modern technologies.
            </p>

            <p className="leading-relaxed" style={{ color: '#9ca3af' }}>
              With a strong foundation in web technologies and a curiosity for AI/ML, I aim
              to bridge the gap between intelligent systems and user-friendly interfaces.
              Every project I take on is an opportunity to learn, grow, and create something
              meaningful.
            </p>

            {/* Trait chips */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              {['Problem Solver', 'Fast Learner', 'Team Player', 'Creative Thinker', 'AI Enthusiast'].map(trait => (
                <motion.span
                  key={trait}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full text-sm font-medium cursor-default"
                  style={{
                    background: 'rgba(108,99,255,0.1)',
                    border: '1px solid rgba(108,99,255,0.25)',
                    color: '#a78bfa',
                  }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <motion.a
                href="mailto:harvanshchaurasia@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                className="btn-primary w-full sm:w-auto text-center"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/harvansh-chaurasia"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="btn-outline w-full sm:w-auto text-center"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
