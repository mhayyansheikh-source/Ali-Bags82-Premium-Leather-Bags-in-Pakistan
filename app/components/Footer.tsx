'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-premium-dark pt-5 pb-3">
      <div className="container-custom">
        <div className="row mb-5">
          {/* Brand Info */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4 className="fw-bold mb-4 gradient-text-gold d-inline-block">Ali Bags82</h4>
            <p className="text-light pe-lg-4">
              Premium leather craftsmanship straight to your doorstep. We specialize in high-quality, genuine leather bags and accessories for the modern professional in Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
            <h6 className="fw-bold mb-4 text-uppercase tracking-wider text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-light text-decoration-none hover-white transition">Home</Link></li>
              <li className="mb-2"><Link href="#about" className="text-light text-decoration-none hover-white transition">About Us</Link></li>
              <li className="mb-2"><Link href="#collections" className="text-light text-decoration-none hover-white transition">Collections</Link></li>
              <li className="mb-2"><Link href="#" className="text-light text-decoration-none hover-white transition">Testimonials</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
            <h6 className="fw-bold mb-4 text-uppercase tracking-wider text-white">Customer Care</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="#" className="text-light text-decoration-none hover-white transition">Contact Us</Link></li>
              <li className="mb-2"><Link href="#" className="text-light text-decoration-none hover-white transition">Shipping Policy</Link></li>
              <li className="mb-2"><Link href="#" className="text-light text-decoration-none hover-white transition">Returns & Exchanges</Link></li>
              <li className="mb-2"><Link href="#" className="text-light text-decoration-none hover-white transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3">
            <h6 className="fw-bold mb-4 text-uppercase tracking-wider text-white">Get in Touch</h6>
            <ul className="list-unstyled text-light">
              <li className="mb-3 d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt me-3 flex-shrink-0" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                <span>Leather Market Sector, Karachi, Pakistan</span>
              </li>
              <li className="mb-3 d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope me-3 flex-shrink-0" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                <span>support@alibags82.com.pk</span>
              </li>
              <li className="mb-3 d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone me-3 flex-shrink-0" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                <span>+92 300 1234567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-light small mb-0">
            &copy; {new Date().getFullYear()} Ali Bags82. All rights reserved.
          </p>
          <div className="mt-3 mt-md-0 d-flex gap-3">
            <span className="text-light small">Powered by Next.js</span>
            <span className="text-light small px-2">|</span>
            <span className="text-light small">Designed for Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
