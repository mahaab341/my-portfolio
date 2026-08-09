import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  const email = 'mahaab341@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/your-profile/';
  const githubUrl = 'https://github.com/your-username';

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Get In Touch
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
          Feel free to reach out via email or LinkedIn!
        </motion.p>

        <div className="d-flex flex-column align-items-center gap-3">
          
          {/* Email Button - Ab ye pakka kaam karega */}
          <motion.a 
            href={`mailto:${email}`} 
            whileHover={{ scale: 1.05 }} 
            className="btn btn-outline-custom" 
            style={{ maxWidth: '300px', width: '100%', textDecoration: 'none' }}
          >
            ✉️ {email}
          </motion.a>
          
          {/* LinkedIn Button */}
          <motion.a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.05 }} 
            className="btn btn-outline-custom" 
            style={{ maxWidth: '300px', width: '100%', textDecoration: 'none' }}
          >
            🔗 LinkedIn Profile
          </motion.a>
          
          {/* GitHub Button */}
          <motion.a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.05 }} 
            className="btn btn-outline-custom" 
            style={{ maxWidth: '300px', width: '100%', textDecoration: 'none' }}
          >
            🐙 GitHub Profile
          </motion.a>

        </div>
      </Container>
    </section>
  );
};

export default Contact;