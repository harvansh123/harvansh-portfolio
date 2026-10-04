import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90, icon: '🌐', color: '#e34f26' },
  { name: 'CSS', level: 85, icon: '🎨', color: '#1572b6' },
  { name: 'JavaScript', level: 80, icon: '⚡', color: '#f7df1e' },
  { name: 'React', level: 75, icon: '⚛️', color: '#61dafb' },
  { name: 'C', level: 78, icon: '🔧', color: '#a8b9cc' },
  { name: 'C++', level: 72, icon: '⚙️', color: '#00599c' },
  { name: 'SQL', level: 70, icon: '🗄️', color: '#336791' },
  { name: 'Python', level: 65, icon: '🐍', color: '#3776ab' },
];

const tools = [
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Figma', icon: '🎭' },
  { name: 'Supabase', icon: '🔺' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Linux', icon: '🐧' },
];

function SkillBar({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-sm" style={{ color: '#e8e8f0' }}>{skill.name}</span>
        </div>
        <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
      </div>

      {/* Progress track */}
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            boxShadow: `0 0 10px ${skill.color}66`,
          }}
        >
          {/* Shimmer */}
          <div className="shimmer absolute inset-0" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="section-padding relative"
      ref={ref}
      style={{ background: 'rgba(10,15,46,0.5)' }}
    >
      {/* Glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)',
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
              Skills
            </span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #6c63ff, transparent)' }} />
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-5">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg font-semibold mb-6"
              style={{ color: '#a78bfa' }}
            >
              ⚡ Technical Skills
            </motion.h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </div>

          {/* Skill Cards + Tools */}
          <div className="space-y-8">
            {/* Tools grid */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-lg font-semibold mb-6"
                style={{ color: '#00d4ff' }}
              >
                🛠️ Tools & Platforms
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="glass-card p-4 flex flex-col items-center justify-center gap-2 cursor-default"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-xs font-medium text-center" style={{ color: '#c4c4d4' }}>
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card mt-10 p-6 md:p-8"
              style={{ border: '1px solid rgba(0,212,255,0.2)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(0,212,255,0.1)' }}
                >
                  🎯
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Currently Learning</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                    Exploring advanced React patterns, Node.js, and diving deeper into Machine
                    Learning with Python. Always growing!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
