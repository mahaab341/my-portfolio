import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center justify-content-center text-center" style={{ minHeight: '90vh', background: 'radial-gradient(circle at 50% 50%, #1c1c1c, #000000)' }}>
      <Container>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>
            Hi, I'm <span style={{ color: 'var(--accent)' }}>[Your Name]</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Frontend Developer | React Enthusiast | UI/UX Lover
          </p>
          <Button className="btn-custom-primary" onClick={() => scrollToSection('projects')}>
            View My Work
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;