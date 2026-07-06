'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container-custom text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="card-premium max-w-2xl mx-auto p-5 border-0 shadow-lg"
          style={{ maxWidth: '600px' }}
        >
          <div className="mb-4">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="d-inline-flex align-items-center justify-content-center rounded-circle text-white mb-3"
              style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-brand-primary)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </motion.div>
            <h1 className="display-5 fw-bold mb-3">Order Confirmed!</h1>
            <p className="lead text-muted mb-4">
              Thank you for choosing Ali Bags82. Your custom leather bag order has been successfully placed. We will contact you shortly to confirm the delivery details in Pakistan.
            </p>
          </div>
          
          <div className="bg-light p-4 rounded mb-4 text-start">
            <h5 className="fw-bold mb-3">What happens next?</h5>
            <ul className="text-muted mb-0 ps-3">
              <li className="mb-2">Our artisans will review your customization options.</li>
              <li className="mb-2">We will dispatch your order via our local courier partners.</li>
              <li>You can pay via Cash on Delivery when the bag arrives!</li>
            </ul>
          </div>

          <Link href="/" className="btn btn-primary px-5 py-3 rounded-pill shadow-sm fs-5">
            Return to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
