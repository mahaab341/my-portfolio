import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

// --- Images (exact filenames as they exist in src/assets/images) ---
import packagesAll from '../assets/images/packages-all.jpg';
import aiTripPlanner from '../assets/images/ai planner.jpg';
import customerSecurity from '../assets/images/customer security.jpg';
import customerBookings from '../assets/images/customer-bookings.jpg';
import destinationMap from '../assets/images/destination map.jpg';
import destinationsPage from '../assets/images/destinations.jpg';
import packageDetail from '../assets/images/package detail.jpg';

import vendorDashboard from '../assets/images/vendor dashboard.jpg';
import vendorUpdateHotel from '../assets/images/vendor hotel.jpg';
import vendorRooms from '../assets/images/vendor rooms.jpg';

import adminDashboard from '../assets/images/admin dashboard.jpg';
import adminPackages from '../assets/images/admin packages.jpg';
import adminDestinations from '../assets/images/admin destinations.jpg';
import adminReviews from '../assets/images/admin reviews.jpg';

const gallery = [
  // --- CUSTOMER SIDE ---
  { group: 'Customer', label: 'Destinations Page', src: destinationsPage },
  { group: 'Customer', label: 'Travel Packages', src: packagesAll },
  { group: 'Customer', label: 'Package Detail', src: packageDetail },
  { group: 'Customer', label: 'Destination Map', src: destinationMap },
  { group: 'Customer', label: 'AI Trip Planner', src: aiTripPlanner },
  { group: 'Customer', label: 'My Bookings', src: customerBookings },
  { group: 'Customer', label: 'Privacy & Security', src: customerSecurity },

  // --- VENDOR SIDE ---
  { group: 'Vendor', label: 'Hotel Dashboard', src: vendorDashboard },
  { group: 'Vendor', label: 'Rooms Management', src: vendorRooms },
  { group: 'Vendor', label: 'Update Hotel', src: vendorUpdateHotel },

  // --- ADMIN SIDE ---
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
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

      {/* Back Button */}
      <div style={{
        padding: '20px 40px',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(13, 17, 23, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000
      }}>
        <Button variant="link" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }} onClick={() => navigate('/')}>
          ← Back to Portfolio
        </Button>
      </div>

      {/* Hero Section */}
      <header className="text-center" style={{
        padding: '70px 20px',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'radial-gradient(circle at 80% 20%, var(--bg-surface-alt), var(--bg-primary))'
      }}>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '2.6rem', marginBottom: '15px', color: 'var(--text-primary)' }}>
          Journey Junction
        </motion.h1>
        <p style={{ maxWidth: '650px', margin: '0 auto 25px auto', color: 'var(--text-secondary)' }}>
          A comprehensive web-based travel planning platform for the Northern Areas of Pakistan.
        </p>
        <div>
          {['React', 'Laravel', 'JWT Auth', 'MySQL', 'REST API'].map((t, i) => (
            <span key={i} style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '5px 14px', borderRadius: '6px', fontSize: '0.85rem', margin: '5px', fontWeight: '600', display: 'inline-block' }}>
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* About Section */}
      <section style={{ maxWidth: '750px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '8px' }}>
          About the Project
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '20px' }}>
          Journey Junction brings together destination discovery, hotel and package bookings, an AI-assisted trip planner, and vendor management into one integrated platform.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          The platform runs on three role-based portals — Customer, Vendor, and Admin — each with its own dashboard and JWT-secured authentication guard, backed by a Laravel REST API and a MySQL database.
        </p>
      </section>

      {/* Gallery Sections */}
      {groups.map((group) => (
        <section key={group} style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.7rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '8px' }}>
            {group === 'Customer' ? 'Customer Experience' : `${group} Panel`}
          </h2>
          <Row className="g-4 mt-3">
            {gallery.filter((g) => g.group === group).map((item, i) => (
              <Col md={4} key={i}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => handleImageClick(item.src)}
                  style={{ cursor: 'pointer', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
                >
                  <img src={item.src} alt={item.label} loading="lazy" style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'top' }} />
                  <div style={{ padding: '12px 15px', fontWeight: '600', color: 'var(--text-primary)', textAlign: 'left' }}>
                    {item.label}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>
      ))}

      {/* Lightbox Modal - close button sits directly on the image's own corner */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" contentClassName="bg-transparent border-0" backdrop="static">
        <Modal.Body className="text-center p-0 border-0">
          {/* This wrapper shrink-wraps exactly to the image's rendered size,
              so the button always sits on the image's corner regardless of aspect ratio */}
          <div style={{ display: 'inline-block', position: 'relative', lineHeight: 0 }}>
            <img
              src={activeImage}
              alt="Preview"
              style={{ display: 'block', maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px', boxShadow: '0 4px 30px rgba(0,0,0,0.6)' }}
            />
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute', top: '10px', right: '10px', background: 'rgba(0, 0, 0, 0.65)',
                border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '1.4rem',
                width: '38px', height: '38px', borderRadius: '50%', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 1050
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.65)'}
            >
              ✕
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)', textAlign: 'center', padding: '25px', borderTop: '1px solid var(--border-subtle)', marginTop: '40px' }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>© {new Date().getFullYear()} Maha • Crafted with React & Laravel</p>
      </footer>
    </div>
  );
};

export default JourneyJunctionDetail;