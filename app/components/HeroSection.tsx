'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SixStepForm from './SixStepForm';

export default function HeroSection() {
  return (
    <section className="section-padding overflow-hidden position-relative bg-dark">
      {/* Container fluid to allow columns to stretch, but keep content aligned */}
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-75">
          
          {/* Left Column - Text & Branding with Background Image */}
          <div 
            className="col-lg-6 d-flex align-items-center position-relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}></div>
            
            <div className="position-relative w-100 p-5 text-center text-lg-start z-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-lg mx-auto mx-lg-0 ms-lg-auto pe-lg-5"
                style={{ maxWidth: '600px' }}
              >
                <span className="badge bg-light text-dark rounded-pill px-3 py-2 mb-3 fw-medium">
                  Premium Leather Goods in Pakistan
                </span>
                <h1 className="display-4 fw-bold mb-4 lh-sm text-white">
                  Crafted for <br className="d-none d-lg-block" />
                  <span className="gradient-text-gold">Elegance & Durability</span>
                </h1>
                <p className="lead text-light mb-5 fs-5">
                  Design your perfect leather bag. Choose from our premium materials, customize to your style, and enjoy free cash on delivery across Pakistan.
                </p>
                
                <div className="d-flex justify-content-center justify-content-lg-start gap-4">
                  <div className="text-center text-lg-start">
                    <h3 className="h2 fw-bold text-white mb-1">10k+</h3>
                    <p className="text-light small mb-0">Happy Customers</p>
                  </div>
                  <div className="text-center text-lg-start border-start border-light ps-4">
                    <h3 className="h2 fw-bold text-white mb-1">100%</h3>
                    <p className="text-light small mb-0">Genuine Leather</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Funnel Form with Subtle Texture Background */}
          <div 
            className="col-lg-6 d-flex align-items-center position-relative py-5"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1606820854416-439b3305ff3c?q=80&w=2070&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Light overlay so the form stands out but texture is visible */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(4px)' }}></div>
            
            <div className="position-relative w-100 px-3 px-md-5 z-1">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="max-w-lg mx-auto"
                style={{ maxWidth: '600px' }}
              >
                <SixStepForm />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
