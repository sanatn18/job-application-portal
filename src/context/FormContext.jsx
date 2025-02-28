import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext); //for easier access to the context in components

export const FormProvider = ({children}) =>{ //wraps children components,makes the form state and functions available to all children components
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',

        resume:null,
        portfolio:null,

        experience:'',
        skills:'',
        reasonForApplying:'',
    });

    const updateFormData = (newData) =>{
        setFormData(prev=>({...prev, ...newData}));
    };

    const nextStep = () =>{
        setCurrentStep(prev=>prev+1);
    };

    const prevStep = () =>{
        setCurrentStep(prev=>prev-1);
    }

    return(
        <FormContext.Provider
            value={{
                currentStep,
                formData,
                updateFormData,
                nextStep,
                prevStep,
                totalSteps:4
            }}
        >
            {children}
        </FormContext.Provider>
    );
}