import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import jjThumb from '../assets/images/jj-customer-home.jpg'; // Apni image yahan confirm karein

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section">
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Projects
        </motion.h2>
        
        {/* Center Mein Card Ke Liye justify-content-center aur md={6} use kiya */}
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-100" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <Card.Img variant="top" src={jjThumb} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body className="p-4 text-start d-flex flex-column">
                  <Card.Title style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>Journey Junction</Card.Title>
                  <Card.Text style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                    A full-stack travel & hospitality booking platform for Northern Pakistan. Customers browse hotels and packages, vendors manage their own properties, and admins oversee the whole platform.
                  </Card.Text>
                  <div className="mb-3">
                    {['React', 'Laravel', 'JWT', 'MySQL', 'REST API'].map((t, i) => (
                      <span key={i} style={{ background: 'rgba(20, 184, 166, 0.1)', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', marginRight: '5px', fontWeight: '600' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button className="btn-custom-primary mt-auto align-self-start" onClick={() => navigate('/projects/journey-junction')}>
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;