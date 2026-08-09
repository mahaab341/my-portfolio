import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Ab import aur neeche variable ka naam same (projectThumb) hai
// Aur file ka naam bhi packages-all.jpg kar diya hai
import projectThumb from '../assets/images/packages-all.jpg'; 

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ amount: 0.2 }} 
              transition={{ duration: 0.6 }} 
              whileHover={{ y: -5 }}
              className="h-100"
            >
              <Card 
                className="h-100" 
                style={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)', 
                  overflow: 'hidden', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  {/* Yahan bhi projectThumb likha hai */}
                  <Card.Img 
                    variant="top" 
                    src={projectThumb} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                  />
                </div>
                <Card.Body className="p-4 text-start d-flex flex-column">
                  <Card.Title style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 700 }}>
                    Journey Junction
                  </Card.Title>
                  <Card.Text style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                    A full-stack travel & hospitality booking platform for Northern Pakistan. Customers browse hotels and packages, vendors manage their own properties, and admins oversee the whole platform.
                  </Card.Text>
                  <div className="mb-3">
                    {['React', 'Laravel', 'JWT', 'MySQL', 'REST API'].map((t, i) => (
                      <span 
                        key={i} 
                        style={{ 
                          background: 'rgba(99, 102, 241, 0.1)',
                          color: 'var(--accent)', 
                          border: '1px solid rgba(99, 102, 241, 0.3)', 
                          padding: '5px 12px', 
                          borderRadius: '6px', 
                          fontSize: '0.8rem', 
                          marginRight: '5px', 
                          marginBottom: '5px',
                          display: 'inline-block',
                          fontWeight: '600' 
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="btn-custom-primary mt-auto align-self-start" 
                    onClick={() => navigate('/projects/journey-junction')}
                  >
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