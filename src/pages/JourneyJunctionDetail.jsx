import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Apni images yahan import karein
import customerHome from '../assets/images/jj-customer-home.jpg';
import travelPackages from '../assets/images/jj-travel-packages.jpg';
import aiTripPlanner from '../assets/images/jj-ai-trip-planner.jpg';
import packageDetail from '../assets/images/jj-package-detail.jpg';
import vendorDashboard from '../assets/images/jj-vendor-hotel-dashboard.jpg';
import vendorUpdateHotel from '../assets/images/jj-vendor-update-hotel.jpg';
import adminDashboard from '../assets/images/jj-admin-dashboard.jpg';
import adminPackages from '../assets/images/jj-admin-package-management.jpg';
import adminDestinations from '../assets/images/jj-admin-destinations.jpg';
import adminReviews from '../assets/images/jj-admin-reviews.jpg';

const gallery = [
  { group: 'Customer', label: 'Destinations Page', src: customerHome },
  { group: 'Customer', label: 'Travel Packages', src: travelPackages },
  { group: 'Customer', label: 'AI Trip Planner', src: aiTripPlanner },
  { group: 'Customer', label: 'Package Detail', src: packageDetail },
  { group: 'Vendor', label: 'Hotel Dashboard', src: vendorDashboard },
  { group: 'Vendor', label: 'Update Hotel', src: vendorUpdateHotel },
  { group: 'Admin', label: 'Dashboard Overview', src: adminDashboard },
  { group: 'Admin', label: 'Package & Booking Management', src: adminPackages },
  { group: 'Admin', label: 'Destinations Management', src: adminDestinations },
  { group: 'Admin', label: 'Reviews Management', src: adminReviews },
];

const groups = ['Customer', 'Vendor', 'Admin'];

const JourneyJunctionDetail = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleImageClick = (src) => {
    setActiveImage(src);
    setShowModal(true);
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <div style={{ padding: '20px 40px', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, backgroundColor: '#000', zIndex: 1000 }}>
        <Button variant="link" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }} onClick={() => navigate('/')}>
          ← Back to Portfolio
        </Button>
      </div>

      <header className="text-center" style={{ padding: '70px 20px', borderBottom: '1px solid var(--border-subtle)', background: 'radial-gradient(circle at 80% 20%, #1c1c1c, #000)' }}>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '2.6rem', marginBottom: '15px' }}>
          Journey Junction
        </motion.h1>
        <p style={{ maxWidth: '650px', margin: '0 auto 25px auto', color: 'var(--text-secondary)' }}>
          A comprehensive web-based travel planning platform for the Northern Areas of Pakistan.
        </p>
        <div>
          {['React', 'Laravel', 'JWT Auth', 'MySQL', 'REST API'].map((t, i) => (
            <span key={i} style={{ background: 'rgba(20, 184, 166, 0.1)', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '5px 14px', borderRadius: '15px', fontSize: '0.85rem', margin: '0 5px', fontWeight: '600' }}>
              {t}
            </span>
          ))}
        </div>
      </header>

      <section style={{ maxWidth: '750px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#fff', borderBottom: '3px solid var(--accent)', display: 'inline-block', paddingBottom: '5px' }}>About the Project</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '20px' }}>
          Journey Junction brings together destination discovery, hotel and package bookings, an AI-assisted trip planner, and vendor management into one integrated platform.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          The platform runs on three role-based portals — Customer, Vendor, and Admin — each with its own dashboard and JWT-secured authentication guard, backed by a Laravel REST API and a MySQL database.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group} style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#fff', borderBottom: '3px solid var(--accent)', display: 'inline-block', paddingBottom: '5px' }}>
            {group === 'Customer' ? 'Customer Experience' : `${group} Panel`}
          </h2>
          <Row className="g-4 mt-3">
            {gallery.filter((g) => g.group === group).map((item, i) => (
              <Col md={4} key={i}>
                <motion.div whileHover={{ scale: 1.03 }} onClick={() => handleImageClick(item.src)} style={{ cursor: 'pointer', background: '#121212', border: '1px solid var(--border-subtle)', borderRadius: '12px', overflow: 'hidden' }}>
                  <img src={item.src} alt={item.label} loading="lazy" style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'top' }} />
                  <div style={{ padding: '12px 15px', fontWeight: '600', color: '#fff', textAlign: 'left' }}>{item.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>
      ))}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" contentClassName="bg-transparent border-0">
        <Modal.Body className="text-center p-0">
          <img src={activeImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px' }} />
        </Modal.Body>
      </Modal>

      <footer style={{ backgroundColor: '#000', color: 'var(--text-secondary)', textAlign: 'center', padding: '20px', borderTop: '1px solid var(--border-subtle)', marginTop: '40px' }}>
        <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default JourneyJunctionDetail;