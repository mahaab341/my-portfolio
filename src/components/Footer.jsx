import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: '#000', color: 'var(--text-secondary)', textAlign: 'center', padding: '20px', borderTop: '1px solid var(--border-subtle)' }}>
      <Container>
        <p style={{ margin: 0 }}>© {year} [Your Name]. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;