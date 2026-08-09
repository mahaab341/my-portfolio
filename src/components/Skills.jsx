import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'] },
  { title: 'Frameworks & Libraries', items: ['React.js', 'Bootstrap', 'Tailwind CSS'] },
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
            <Col md={4} key={index}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
                <Card style={{ backgroundColor: 'var(--bg-surface-alt)', border: '1px solid var(--border-subtle)' }}>
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