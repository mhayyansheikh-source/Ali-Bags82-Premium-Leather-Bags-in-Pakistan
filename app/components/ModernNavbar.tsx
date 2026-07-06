'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar navbar-expand-lg py-3 sticky-top navbar-dark bg-dark border-bottom"
      style={{ zIndex: 1050, borderColor: 'rgba(255, 215, 0, 0.2)' /* Subtle gold border */ }}
    >
      <div className="container-custom d-flex justify-content-between align-items-center w-100">
        <Link href="/" className="navbar-brand d-flex align-items-center" style={{ textDecoration: 'none' }}>
          <span className="fs-3 fw-bold gradient-text-gold">Ali Bags82</span>
        </Link>

        <button 
          className="navbar-toggler border-0 shadow-none d-lg-none" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ cursor: 'pointer' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show mt-3 bg-dark p-3 rounded' : ''}`}>
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center gap-3">
            <li className="nav-item">
              <Link href="#collections" className="nav-link fw-semibold text-light px-3 hover-opacity">Collections</Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link fw-semibold text-light px-3 hover-opacity">Our Craft</Link>
            </li>
            <li className="nav-item">
              <Link href="#testimonials" className="nav-link fw-semibold text-light px-3 hover-opacity">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link href="#order" className="btn btn-outline-light rounded-pill px-4 ms-lg-2 hover-gold" onClick={() => setIsOpen(false)}>
                Design Yours
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
