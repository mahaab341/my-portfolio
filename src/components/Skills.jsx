import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'PHP'] },
  { title: 'Frameworks & Libraries', items: ['React.js', 'Bootstrap', 'Laravel'] },
  { title: 'Database', items: ['MySQL'] },
  { title: 'Tools', items: ['Git & GitHub', 'VS Code', 'Figma'] },
];

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          My Skills
        </motion.h2>
        <Row className="g-4 justify-content-center">
          {skillCategories.map((category, index) => (
            <Col md={6} lg={3} key={index}> {/* lg={3} kiya taa-ke 4 cards ek line me aayen */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.2 }}
                className="h-100"
              >
                <Card className="h-100" style={{ backgroundColor: 'var(--bg-surface-alt)', border: '1px solid var(--border-subtle)' }}>
                  <Card.Body>
                    <Card.Title style={{ color: 'var(--accent)' }}>{category.title}</Card.Title>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                      {category.items.map((item, i) => (
                        <li key={i} style={{ padding: '6px 0', borderBottom: '1px solid var(--border-subtle)' }}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;