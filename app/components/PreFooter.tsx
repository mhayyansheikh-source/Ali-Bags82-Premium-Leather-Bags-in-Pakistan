'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PreFooter() {
  return (
    <section 
      className="section-padding position-relative text-center d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '60vh'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(62, 39, 35, 0.85)' }}></div>
      
      <div className="container-custom position-relative z-1 text-white py-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
          style={{ maxWidth: '800px' }}
        >
          <h2 className="display-4 fw-bold mb-4">Ready to Make a Statement?</h2>
          <p className="lead mb-5 text-light fs-4">
            Join thousands of satisfied customers across Pakistan. Customize your premium leather bag today and enjoy free Cash on Delivery.
          </p>
          <button 
            className="btn btn-primary px-5 py-3 rounded-pill fs-5 fw-medium shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Design Yours Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
