import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <p className="footer-text">
          © {year} <span className="footer-accent">Maha</span> • Crafted with{' '}
          <span className="footer-accent">React</span> &amp;{' '}
          <span className="footer-accent">Bootstrap</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
