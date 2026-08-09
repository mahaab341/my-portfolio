import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          About Me
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '1.05rem' }}>
            Hello! I'm a passionate frontend developer who loves building clean, user-friendly websites. I enjoy solving problems through code and learning new tools and technologies.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            I'm currently working with React.js and expanding my skills into backend technologies like Node.js and Laravel. When I'm not coding, I'm reading tech blogs or exploring open-source projects.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;