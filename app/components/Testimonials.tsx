'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Dynamically import the JSON data generated earlier
    import('../data/testimonials.json')
      .then((data) => setTestimonials(data.default))
      .catch((err) => console.error("Error loading testimonials", err));
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="section-padding overflow-hidden bg-dark text-white">
      <div className="container-custom text-center mb-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-warning text-uppercase tracking-wider small fw-bold">Trusted by Thousands</span>
          <h2 className="display-6 fw-bold mt-2">What Our Customers Say</h2>
        </motion.div>
      </div>

      <div className="position-relative w-100" style={{ height: '300px' }}>
        {/* Infinite CSS Marquee implementation */}
        <div className="d-flex w-100 overflow-hidden" style={{ position: 'relative' }}>
          <motion.div
            className="d-flex gap-4 px-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 80 // Adjust speed based on array size
            }}
            style={{ width: "fit-content" }}
          >
            {/* Render the 100 testimonials twice to create the infinite loop effect seamlessly */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={`${t.id}-${idx}`} 
                className="card bg-white text-dark rounded-4 shadow p-4 border-0" 
                style={{ width: '350px', flexShrink: 0 }}
              >
                <div className="d-flex text-warning mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  ))}
                </div>
                <p className="fst-italic text-muted mb-4" style={{ fontSize: '0.95rem' }}>"{t.text}"</p>
                <div className="mt-auto border-top pt-3 d-flex align-items-center">
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center fw-bold text-dark me-3" style={{ width: '40px', height: '40px' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{t.name}</h6>
                    <small className="text-muted">{t.location}</small>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
