import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({children}) =>{
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

    const resetForm = () =>{
        setCurrentStep(1);
        setFormData({
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