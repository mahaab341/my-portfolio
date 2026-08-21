import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './skills.css';

const skillCategories = [
  { title: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'PHP'] },
  { title: 'Frameworks & Libraries', items: ['React.js', 'Bootstrap', 'Laravel'] },
  { title: 'Database', items: ['MySQL'] },
  { title: 'Tools', items: ['Git & GitHub', 'VS Code', 'Figma'] },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <Row className="g-4 justify-content-center">
          {skillCategories.map((category, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="h-100"
              >
                <Card className="skill-card">
                  <Card.Body>
                    <Card.Title className="skill-card-title">
                      {category.title}
                    </Card.Title>
                    <ul className="skill-list">
                      {category.items.map((item, i) => (
                        <li key={i}>{item}</li>
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
