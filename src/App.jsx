import { FormProvider } from './context/FormContext'
import JobApplicationForm from './components/JobApplicationForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6'>
        <FormProvider>
          <JobApplicationForm />
        </FormProvider>
      </div>
    </div>
  )
}

export default App
