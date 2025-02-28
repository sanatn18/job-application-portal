import { FormProvider } from './context/FormContext';
import JobApplicationForm from './components/JobApplicationForm';

function App() {
  return (
    <div className="app-container">
      <div className="form-wrapper">
        <h1 className="form-title">Job Application Portal</h1>
        <FormProvider>
          <JobApplicationForm />
        </FormProvider>
      </div>
    </div>
  );
}

export default App;