import { useForm } from 'react-hook-form';
import { useFormContext } from '../../context/FormContext';
import '../../App.css'

const Step1 = () => {
  const { formData, updateFormData, nextStep } = useFormContext();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone
    }
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Personal Information</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-input"
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && (
              <p className="form-error">{errors.firstName.message}</p>
            )}
          </div>
          
          <div className="form-group">
            <label className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-input"
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && (
              <p className="form-error">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="form-error">{errors.email.message}</p>
          )}
        </div>
        
        <div className="form-group">
          <label className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            inputMode="numeric"
            className="form-input"
            pattern="[0-9]{10}"
            placeholder="10-digit number"
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be exactly 10 digits'
              },
              validate: {
                numbersOnly: value => /^\d+$/.test(value) || 'Only numbers are allowed'
              }
            })}
          />
          {errors.phone && (
            <p className="form-error">{errors.phone.message}</p>
          )}
        </div>
        
        <div className="form-buttons">
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

export default Step1;