import { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import '../../App.css'

const Step4 = () => {
  const { formData, prevStep } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartNew = () => {
    
    window.location.reload();
  };

  if (isSubmitted) {
    return (
      <div className="success-container">
        <div className="success-icon">
          <svg width="64" height="64" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="success-title">Application Submitted Successfully!</h2>
        <p className="success-message">
          Thank you for submitting your application. We will review your information and get back to you soon.
        </p>
        <button
          onClick={handleStartNew}
          className="button button-primary"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="step-container">
      <h2 className="step-title">Review Your Application</h2>
      
      <div className="review-container">
        <h3 className="review-section-title">Personal Information</h3>
        <div className="review-grid">
          <div className="review-item">
            <p className="review-label">First Name</p>
            <p className="review-value">{formData.firstName}</p>
          </div>
          <div className="review-item">
            <p className="review-label">Last Name</p>
            <p className="review-value">{formData.lastName}</p>
          </div>
          <div className="review-item">
            <p className="review-label">Email</p>
            <p className="review-value">{formData.email}</p>
          </div>
          <div className="review-item">
            <p className="review-label">Phone</p>
            <p className="review-value">{formData.phone}</p>
          </div>
        </div>
        
        <h3 className="review-section-title">Documents</h3>
        <div className="review-grid">
          <div className="review-item">
            <p className="review-label">Resume</p>
            <p className="review-value">{formData.resume ? formData.resume.name : 'Not provided'}</p>
          </div>
          <div className="review-item">
            <p className="review-label">Portfolio</p>
            <p className="review-value">{formData.portfolio ? formData.portfolio.name : 'Not provided'}</p>
          </div>
        </div>
        
        <h3 className="review-section-title">Screening Questions</h3>
        <div className="review-item full-width">
          <p className="review-label">Relevant Experience</p>
          <p className="review-value review-multiline">{formData.experience}</p>
        </div>
        <div className="review-item full-width">
          <p className="review-label">Skills</p>
          <p className="review-value review-multiline">{formData.skills}</p>
        </div>
        <div className="review-item full-width">
          <p className="review-label">Reason for Applying</p>
          <p className="review-value review-multiline">{formData.reasonForApplying}</p>
        </div>
      </div>
      
      <div className="form-buttons">
        <button
          type="button"
          onClick={prevStep}
          className="button button-secondary"
          disabled={isSubmitting}
        >
          Previous
        </button>
        
        <button
          type="button"
          onClick={handleSubmit}
          className="button button-success"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </div>
  );
};

export default Step4;