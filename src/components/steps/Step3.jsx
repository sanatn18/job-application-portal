import { useForm } from 'react-hook-form';
import { useFormContext } from '../../context/FormContext';
import '../../App.css'

const Step3 = () => {
  const { formData, updateFormData, nextStep, prevStep } = useFormContext();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      experience: formData.experience,
      skills: formData.skills,
      reasonForApplying: formData.reasonForApplying
    }
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Screening Questions</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-label">
            Describe your relevant experience
          </label>
          <textarea
            {...register('experience', { 
              required: 'This field is required',
              minLength: {
                value: 50,
                message: 'Please provide a more detailed response (minimum 50 characters)'
              }
            })}
            rows={4}
            className="form-textarea"
          />
          {errors.experience && (
            <p className="form-error">{errors.experience.message}</p>
          )}
        </div>
        
        <div className="form-group">
          <label className="form-label">
            What skills do you bring to this position?
          </label>
          <textarea
            {...register('skills', { 
              required: 'This field is required' 
            })}
            rows={4}
            className="form-textarea"
          />
          {errors.skills && (
            <p className="form-error">{errors.skills.message}</p>
          )}
        </div>
        
        <div className="form-group">
          <label className="form-label">
            Why are you interested in applying for this position?
          </label>
          <textarea
            {...register('reasonForApplying', { 
              required: 'This field is required' 
            })}
            rows={4}
            className="form-textarea"
          />
          {errors.reasonForApplying && (
            <p className="form-error">{errors.reasonForApplying.message}</p>
          )}
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

export default Step3;