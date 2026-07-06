'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="section-padding bg-light overflow-hidden">
      <div className="container-custom">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="display-5 fw-bold mb-4">
                The Heritage of <span className="gradient-text-gold">True Craftsmanship</span>
              </h2>
              <p className="lead text-muted mb-4">
                At Ali Bags82, we believe that a bag is more than just an accessory—it's a statement of elegance and a companion for life's journey. Rooted in the rich traditions of Pakistani leatherwork, every piece we create is a testament to unparalleled quality and timeless design.
              </p>
              <ul className="list-unstyled mb-5">
                <li className="mb-3 d-flex align-items-center">
                  <span className="bg-dark text-white rounded-circle p-2 me-3 d-inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>
                  </span>
                  <span className="fs-5 fw-medium">100% Genuine, Full-Grain Leather</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="bg-dark text-white rounded-circle p-2 me-3 d-inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>
                  </span>
                  <span className="fs-5 fw-medium">Handcrafted by Master Artisans</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="bg-dark text-white rounded-circle p-2 me-3 d-inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>
                  </span>
                  <span className="fs-5 fw-medium">Ethically Sourced Materials</span>
                </li>
              </ul>
              <a href="#collections" className="btn btn-outline-dark px-4 py-3 rounded-pill fw-medium">
                Explore Our Collections
              </a>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="position-relative rounded-4 overflow-hidden shadow-lg"
              style={{ aspectRatio: '4/5' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop" 
                alt="Leather Craftsmanship" 
                className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
