import React from 'react';
import './Stepper.css'; // Create a CSS file for styling

const Stepper = ({ currentStep }) => {
  return (
    <div className="stepper">
      <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
        <div className="step-number">1</div>
        <div className="step-label">Step 1</div>
      </div>
      <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
        <div className="step-number">2</div>
        <div className="step-label">Step 2</div>
      </div>
      <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
        <div className="step-number">3</div>
        <div className="step-label">Step 3</div>
      </div>
    </div>
  );
};

export default Stepper;
