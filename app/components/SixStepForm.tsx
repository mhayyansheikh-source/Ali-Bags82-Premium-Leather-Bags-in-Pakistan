'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function SixStepForm() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const totalSteps = 6;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
    // In a real scenario, API call goes here
    router.push('/thank-you');
  };

  const slideVariants = {
    hiddenRight: { x: 50, opacity: 0 },
    hiddenLeft: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exitRight: { x: 50, opacity: 0, transition: { duration: 0.3 } },
    exitLeft: { x: -50, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="card-premium h-100 d-flex flex-column justify-content-center p-4 p-lg-5 position-relative overflow-hidden">
      <div className="mb-4 text-center">
        <h3 className="mb-2">Customize Your Bag</h3>
        <p className="text-muted small">Step {step} of {totalSteps}</p>
        <div className="progress" style={{ height: '6px' }}>
          <div 
            className="progress-bar" 
            role="progressbar" 
            style={{ width: `${(step / totalSteps) * 100}%`, backgroundColor: 'var(--color-brand-primary)' }}
            aria-valuenow={(step / totalSteps) * 100} 
            aria-valuemin={0} 
            aria-valuemax={100}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex-grow-1 d-flex flex-column">
        <div className="flex-grow-1 position-relative" style={{ minHeight: '300px' }}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="hiddenRight" animate="visible" exit="exitLeft" className="h-100 w-100 position-absolute">
                <h5 className="mb-4">1. Choose Bag Style</h5>
                <div className="d-grid gap-3">
                  {['Classic Tote', 'Executive Messenger', 'Urban Backpack', 'Weekend Duffle'].map(style => (
                    <label key={style} className="btn btn-outline-dark text-start p-3 rounded" style={{ borderColor: '#E0E0E0' }}>
                      <input type="radio" value={style} {...register('bagStyle', { required: true })} className="me-3" />
                      <span className="fw-medium">{style}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="hiddenRight" animate="visible" exit="exitLeft" className="h-100 w-100 position-absolute">
                <h5 className="mb-4">2. Select Material & Color</h5>
                <div className="d-grid gap-3">
                  {['Vintage Brown Leather', 'Midnight Black Leather', 'Tan Suede', 'Navy Blue Leather'].map(color => (
                    <label key={color} className="btn btn-outline-dark text-start p-3 rounded" style={{ borderColor: '#E0E0E0' }}>
                      <input type="radio" value={color} {...register('materialColor', { required: true })} className="me-3" />
                      <span className="fw-medium">{color}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="hiddenRight" animate="visible" exit="exitLeft" className="h-100 w-100 position-absolute">
                <h5 className="mb-4">3. Personalization (Optional)</h5>
                <div className="mb-4">
                  <label className="form-label text-muted small">Add initials or a custom name (Max 8 chars)</label>
                  <input type="text" className="form-control p-3 bg-light border-0" placeholder="e.g. A.K" maxLength={8} {...register('personalization')} />
                </div>
                <div className="mb-3">
                  <label className="form-label text-muted small">Hardware Finish</label>
                  <select className="form-select p-3 bg-light border-0" {...register('hardware')}>
                    <option value="Antique Brass">Antique Brass</option>
                    <option value="Polished Silver">Polished Silver</option>
                    <option value="Matte Black">Matte Black</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" variants={slideVariants} initial="hiddenRight" animate="visible" exit="exitLeft" className="h-100 w-100 position-absolute">
                <h5 className="mb-4">4. Contact Details</h5>
                <div className="mb-3">
                  <input type="text" className="form-control p-3 bg-light border-0" placeholder="Full Name" {...register('fullName', { required: true })} />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control p-3 bg-light border-0" placeholder="Email Address" {...register('email', { required: true })} />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control p-3 bg-light border-0" placeholder="Phone Number (e.g. 0300 1234567)" {...register('phone', { required: true })} />
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" variants={slideVariants} initial="hiddenRight" animate="visible" exit="exitLeft" className="h-100 w-100 position-absolute">
                <h5 className="mb-4">5. Shipping Address (Pakistan)</h5>
                <div className="mb-3">
                  <input type="text" className="form-control p-3 bg-light border-0" placeholder="Street Address" {...register('address', { required: true })} />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control p-3 bg-light border-0" placeholder="City" {...register('city', { required: true })} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <select className="form-select p-3 bg-light border-0" {...register('province')}>
                      <option value="Punjab">Punjab</option>
                      <option value="Sindh">Sindh</option>
                      <option value="KPK">KPK</option>
                      <option value="Balochistan">Balochistan</option>
                      <option value="Islamabad">Islamabad Capital</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div key="step6" variants={slideVariants} initial="hiddenRight" animate="visible" exit="exitLeft" className="h-100 w-100 position-absolute">
                <h5 className="mb-4">6. Review & Confirm</h5>
                <div className="bg-light p-4 rounded mb-4 border" style={{ borderColor: '#E0E0E0' }}>
                  <p className="mb-2 text-muted small">You are about to place your order. Please confirm your selections.</p>
                  <p className="mb-1 fw-bold text-dark">Payment Method:</p>
                  <p className="mb-0 text-muted">Cash on Delivery (COD) available across Pakistan.</p>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-3 fs-5 shadow-sm">
                  Complete Order
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="d-flex justify-content-between mt-5 pt-3 border-top">
          <button 
            type="button" 
            className="btn btn-link text-muted text-decoration-none px-0" 
            onClick={prevStep}
            disabled={step === 1}
            style={{ opacity: step === 1 ? 0 : 1, transition: 'opacity 0.2s' }}
          >
            ← Back
          </button>
          
          {step < totalSteps && (
            <button 
              type="button" 
              className="btn btn-dark px-5 rounded-pill" 
              onClick={nextStep}
            >
              Continue
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
