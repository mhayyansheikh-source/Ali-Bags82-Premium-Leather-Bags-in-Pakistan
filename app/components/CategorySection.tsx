'use client';

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, title: 'Handbags', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Laptop & Office', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Travel Bags', img: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Wallets & Accessories', img: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=800&auto=format&fit=crop' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CategorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span className="text-muted text-uppercase tracking-wider small fw-bold">Shop by Category</span>
          <h2 className="display-6 fw-bold mt-2">Find Your Perfect Match</h2>
        </motion.div>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} className="col-md-6 col-lg-3" variants={itemVariants}>
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm position-relative group" style={{ cursor: 'pointer', height: '350px' }}>
                <motion.img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-100 h-100 object-fit-cover transition-transform"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                  <h4 className="text-white mb-0 fw-medium">{cat.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
