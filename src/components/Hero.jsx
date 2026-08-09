import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';
import './hero.css';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-bg-wrapper position-relative overflow-hidden d-flex align-items-center justify-content-center"
    >
      {/* Animated Background Elements */}
      <div className="hero-grid position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="hero-glow glow-1 rounded-circle position-absolute"></div>
      <div className="hero-glow glow-2 rounded-circle position-absolute"></div>

      <Container className="text-center position-relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: '3.5rem', marginBottom: '15px', fontWeight: 800 }}>
            Hi, I'm <span style={{ color: 'var(--accent)' }}>Maha AbdulRehman</span>
          </h1>
          {/* Yahan Update Kiya Hai */}
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Full Stack Developer | React & Laravel Enthusiast
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