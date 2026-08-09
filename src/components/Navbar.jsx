import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';
import './customNavbar.css';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About Me', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll-spy: whichever section is currently in view stays highlighted
  // until you scroll to (or click) another one. Only runs on the home page,
  // since that's the only page with these sections.
  useEffect(() => {
    if (location.pathname !== '/') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Safe routing: only "/" and "/projects/journey-junction" actually exist
  // as routes, so section links never push a fake URL like "/about" (which
  // would 404 on refresh). If we're not on the home page, navigate there
  // first, then scroll once it has mounted.
  const goToSection = useCallback(
    (id) => {
      setExpanded(false);
      setActiveSection(id);

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(id), 150);
      } else {
        scrollToSection(id);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => goToSection('home')}>&lt; MyPortfolio /&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                onClick={() => goToSection(item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;