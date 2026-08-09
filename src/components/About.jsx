import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <Container>
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }} // Jab 20% section screen par aaye, tab trigger ho
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        {/* Content Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }} // 'once: true' hata diya hai, ab har baar scroll par animate hoga
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'left' }}
        >
          <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '1.05rem' }}>
            I am a results-driven <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Full Stack Developer</span> specializing in building scalable web applications and intuitive user interfaces. With a strong foundation in both frontend and backend technologies, I architect end-to-end solutions that deliver seamless digital experiences.
          </p>
          
          <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '1.05rem' }}>
            My technical stack is centered around <span style={{ color: 'var(--accent)' }}>React.js</span> for dynamic frontend development, complemented by <span style={{ color: 'var(--accent)' }}>PHP and Laravel</span> for building robust REST APIs. I possess extensive experience in designing and optimizing <span style={{ color: 'var(--accent)' }}>MySQL</span> databases, ensuring secure, efficient, and well-structured data management across complex applications.
          </p>
          
          <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '1.05rem' }}>
            A recent highlight of my work is <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>"Journey Junction,"</span> a comprehensive travel and hospitality platform where I successfully integrated role-based architectures and JWT-secured APIs. I am highly adept at translating complex business requirements into clean, maintainable code and scalable system designs.
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            I am committed to continuous learning and staying updated with industry best practices. I am always open to collaborating on challenging projects and delivering high-quality software solutions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;