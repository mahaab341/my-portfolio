import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About Me', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Agar koi direct link bheje (e.g., /about) toh load par auto-scroll ho
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path) {
      const el = document.getElementById(path);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const goToSection = (id) => {
    setExpanded(false);
    
    // URL update karenge bina # ke (e.g., /about)
    const newPath = id === 'home' ? '/' : `/${id}`;
    window.history.pushState({}, '', newPath);

    // Smooth scroll bhi hoga
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => goToSection('home')}>&lt; MyPortfolio /&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {navItems.map((item) => (
              <Nav.Link key={item.id} onClick={() => goToSection(item.id)}>
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