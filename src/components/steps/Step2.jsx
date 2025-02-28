import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from '../../context/FormContext';
import '../../App.css'

const Step2 = () => {
  const { formData, updateFormData, nextStep, prevStep } = useFormContext();

  const onResumeUpload = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      updateFormData({ resume: acceptedFiles[0] });
    }
  }, [updateFormData]);

  const onPortfolioUpload = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      updateFormData({ portfolio: acceptedFiles[0] });
    }
  }, [updateFormData]);

  const resumeDropzone = useDropzone({
    onDrop: onResumeUpload,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  const portfolioDropzone = useDropzone({
    onDrop: onPortfolioUpload,
    accept: {
      'application/pdf': ['.pdf'],
      'application/zip': ['.zip'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // requires a resume (mandatory)
    if (!formData.resume) {
      alert('Please upload your resume before proceeding');
      return;
    }
    
    nextStep();
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Upload Documents</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Resume / CV <span className="required-mark">*</span>
          </label>
          <div 
            {...resumeDropzone.getRootProps()} 
            className={`dropzone ${resumeDropzone.isDragActive ? 'dropzone-active' : ''}`}
          >
            <input {...resumeDropzone.getInputProps()} />
            
            {formData.resume ? (
              <div className="file-info">
                <p className="file-name">{formData.resume.name}</p>
                <p className="file-size">
                  {(formData.resume.size / 1024).toFixed(2)} KB
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateFormData({ resume: null });
                  }}
                  className="file-remove"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div className="dropzone-content">
                <p className="dropzone-text">Drag & drop your resume here, or click to select</p>
                <p className="dropzone-hint">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label">
            Portfolio (Optional)
          </label>
          <div 
            {...portfolioDropzone.getRootProps()} 
            className={`dropzone ${portfolioDropzone.isDragActive ? 'dropzone-active' : ''}`}
          >
            <input {...portfolioDropzone.getInputProps()} />
            
            {formData.portfolio ? (
              <div className="file-info">
                <p className="file-name">{formData.portfolio.name}</p>
                <p className="file-size">
                  {(formData.portfolio.size / 1024).toFixed(2)} KB
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateFormData({ portfolio: null });
                  }}
                  className="file-remove"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div className="dropzone-content">
                <p className="dropzone-text">Drag & drop your portfolio here, or click to select</p>
                <p className="dropzone-hint">Accepted formats: PDF, DOC, DOCX, ZIP (Max 10MB)</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="form-buttons">
          <button
            type="button"
            onClick={prevStep}
            className="button button-secondary"
          >
            Previous
          </button>
          
          <button
            type="submit"
            className="button button-primary"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;