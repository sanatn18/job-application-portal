import { useFormContext } from "../context/FormContext";
import ProgressBar from "./ProgressBar";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const JobApplicationForm = ()=>{
    const { currentStep } = useFormContext();

    const renderStep = () => {
        switch(currentStep){
            case 1:
                return <Step1/>;
            case 2:
                return <Step2/>;
            case 3:
                return <Step3/>;
            case 4: 
                return <Step4/>;
            default:
                return <Step1/>;
        }
    };

    return(
        <div className="form-container">
            <ProgressBar/>
            {renderStep()}
        </div>
    );
};

export default JobApplicationForm;

