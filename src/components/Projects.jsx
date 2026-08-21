import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projectThumb from '../assets/images/packages-all.jpg';
import './projects.css';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section projects-section">
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
              <Card className="project-card h-100">
                {/* Image */}
                <div className="project-img-wrapper">
                  <Card.Img variant="top" src={projectThumb} />
                </div>

                {/* Body */}
                <Card.Body className="project-card-body">
                  <Card.Title className="project-title">
                    Journey Junction
                  </Card.Title>

                  <Card.Text className="project-description">
                    A full-stack travel &amp; hospitality booking platform for Northern
                    Pakistan. Customers browse hotels and packages, vendors manage their
                    own properties, and admins oversee the whole platform.
                  </Card.Text>

                  {/* Tech Badges */}
                  <div className="tech-badges">
                    {['React', 'Laravel', 'JWT', 'MySQL', 'REST API'].map((t, i) => (
                      <span key={i} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Button
                    className="btn-custom-primary project-btn"
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
