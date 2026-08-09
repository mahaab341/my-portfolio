import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  const email = 'mahaab341@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/maha-abdulrehman/';
  const githubUrl = 'https://github.com/mahaab341';

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Get In Touch
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
          Feel free to reach out via email or LinkedIn!
        </motion.p>

        {/* Centered Cards Container */}
        <div className="d-flex flex-column align-items-center gap-4" style={{ maxWidth: '350px', margin: '0 auto' }}>
          
          {/* Email Button */}
          <motion.a 
            href={`mailto:${email}`} 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline-custom w-100" 
            style={{ textDecoration: 'none', borderRadius: '12px' }}
          >
            <span style={{ fontSize: '1.2rem' }}>✉️</span> {email}
          </motion.a>
          
          {/* LinkedIn Button */}
          <motion.a 
            href="https://www.linkedin.com/in/maha-abdulrehman/" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline-custom w-100" 
            style={{ textDecoration: 'none', borderRadius: '12px' }}
          >
            <span style={{ fontSize: '1.2rem' }}>🔗</span> LinkedIn Profile
          </motion.a>
          
          {/* GitHub Button */}
          <motion.a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline-custom w-100" 
            style={{ textDecoration: 'none', borderRadius: '12px' }}
          >
            <span style={{ fontSize: '1.2rem' }}>🐙</span> GitHub Profile
          </motion.a>

        </div>
      </Container>
    </section>
  );
};

export default Contact;