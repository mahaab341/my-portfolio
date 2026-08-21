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
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Maha AbdulRehman</span>
          </h1>

          <p className="hero-subtitle">
            Full Stack Developer | React &amp; Laravel Enthusiast
          </p>

          {/* Buttons Row */}
          <div className="hero-btn-group">
            <Button
              className="btn-custom-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>

            <a
              href="/Maha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
