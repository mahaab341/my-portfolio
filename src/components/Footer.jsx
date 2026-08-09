import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{ backgroundColor: '#000', color: 'var(--text-secondary)', textAlign: 'center', padding: '25px', borderTop: '1px solid var(--border-subtle)' }}>
      <Container>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          © {year} Maha • Crafted with React & Bootstrap
        </p>
      </Container>
    </footer>
  );
};

export default Footer;