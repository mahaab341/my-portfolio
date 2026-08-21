import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './contact.css';

const Contact = () => {
  const email = 'mahaab341@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/maha-abdulrehman/';
  const githubUrl = 'https://github.com/mahaab341';

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="contact-subtitle"
        >
          Feel free to reach out via email or LinkedIn!
        </motion.p>

        {/* Contact Links */}
        <div className="contact-links-wrapper">

          {/* Email */}
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="contact-link-btn"
          >
            <span className="contact-link-icon">✉️</span>
            {email}
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="contact-link-btn"
          >
            <span className="contact-link-icon">🔗</span>
            LinkedIn Profile
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="contact-link-btn"
          >
            <span className="contact-link-icon">🐙</span>
            GitHub Profile
          </motion.a>

        </div>
      </Container>
    </section>
  );
};

export default Contact;
