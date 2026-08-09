import React from 'react';
import { Container, Button } from 'react-bootstrap';
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
          
          {/* Email Button - Direct href use kiya hai */}
          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '100%', maxWidth: '300px' }}>
            <Button 
              href={`mailto:${email}`} 
              className="btn-outline-custom w-100"
              style={{ textDecoration: 'none' }}
            >
              ✉️ {email}
            </Button>
          </motion.div>
          
          {/* LinkedIn Button */}
          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '100%', maxWidth: '300px' }}>
            <Button 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-custom w-100"
            >
              🔗 LinkedIn Profile
            </Button>
          </motion.div>
          
          {/* GitHub Button */}
          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '100%', maxWidth: '300px' }}>
            <Button 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-custom w-100"
            >
              🐙 GitHub Profile
            </Button>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;