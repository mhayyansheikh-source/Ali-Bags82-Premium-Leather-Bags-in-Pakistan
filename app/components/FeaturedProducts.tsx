'use client';

import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, title: 'The Executive Briefcase', price: 'Rs. 18,500', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Classic Leather Tote', price: 'Rs. 14,000', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Vintage Duffle Bag', price: 'Rs. 22,000', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Urban Backpack', price: 'Rs. 16,500', img: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=800&auto=format&fit=crop' },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-6 fw-bold mb-0">Featured Products</h2>
            <p className="text-muted mt-2 mb-0">Handpicked selections for the modern professional.</p>
          </motion.div>
          <motion.a 
            href="#" 
            className="btn btn-link text-dark text-decoration-none fw-medium d-none d-md-block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            View All →
          </motion.a>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={product.id} className="col-md-6 col-lg-3">
              <motion.div 
                className="card border-0 h-100 bg-white rounded-4 shadow-sm overflow-hidden card-premium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="position-relative" style={{ height: '300px' }}>
                  <img src={product.img} alt={product.title} className="w-100 h-100 object-fit-cover" />
                  <span className="badge bg-dark position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">Top Seller</span>
                </div>
                <div className="card-body p-4 text-center">
                  <h5 className="card-title fw-bold text-dark">{product.title}</h5>
                  <p className="card-text text-muted mb-4">{product.price}</p>
                  <button className="btn btn-outline-dark w-100 rounded-pill py-2 fw-medium" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Customize Now
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
