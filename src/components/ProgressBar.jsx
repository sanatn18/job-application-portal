import { useFormContext } from '../context/FormContext';

const ProgressBar = () => {
  const { currentStep, totalSteps } = useFormContext();
  
  return (
    <div className="progress-bar-container">
      <div className="progress-steps">
        <div className="progress-step">Personal Info</div>
        <div className="progress-step">Documents</div>
        <div className="progress-step">Screening Questions</div>
        <div className="progress-step">Review & Submit</div>
      </div>
      <div className="progress-track">
        <div 
          className="progress-fill"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;