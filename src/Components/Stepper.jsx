import React from 'react';
import './Stepper.css'; // Create a CSS file for styling

const Stepper = ({ currentStep }) => {
  return (
    <div className="stepper">
      <div>
        <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
        </div>
        <div className="step-content">
          <div className="step-label">Fill in personal details</div>
          {currentStep === 1 && <div className="step-line"></div>}
        </div>
      </div>

      <div>
        <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
        </div>
        <div className="step-content">
          <div className="step-label">Initiating payment</div>
          {currentStep === 2 && <div className="step-line"></div>}
        </div>
      </div>

      <div>
        <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
        </div>
        <div className="step-content">
          <div className="step-label">Payment successful</div>
          {currentStep === 3 && <div className="step-line"></div>}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
