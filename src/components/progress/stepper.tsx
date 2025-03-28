import React   from "react";

interface Step {
  label: string;
  path: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: string;
}

const getStepDesign = (step: Step, status:String, index: number) => {

  console.log("step", status, index);
  switch (status) {
    case "Completed":
      return (
        <div id={index.toString()+"sub"} className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-linear-90 from-primary to-secondary text-white rounded-full">
            &#10003;
          </div>
          <span className="ml-2 font-medium text-base font-kanit">
            {step.label}
          </span>
        </div>
      );
    case "Active":
      return (
        <div id={index.toString()+"sub"} className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 border-2 border-primary text-primary rounded-full">
            {index}
          </div>
          <span className="ml-2 text-primary-dark font-kanit">{step.label}</span>
        </div>
      );
    case "Pending":
      return (
        <div id={index.toString()+"sub"} className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 border-2 border-muted text-muted rounded-full">
            {index}
          </div>
          <span className="ml-2 text-muted font-kanit">{step.label}</span>
        </div>
      );
    }
  };

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {

  const checkStepCompleted = (steps: Step[], currentStep: String, stepIndex: number) => {
    
    const currentStepIndex = steps.findIndex((step) => step.path === currentStep);

    if (stepIndex > currentStepIndex) {
      return "Pending";
    } else if (stepIndex === currentStepIndex) {
      return "Active";
    } else {
      return "Completed";
    }
  }

  return (
    <div>
      <div className="flex items-center bg-light p-4 my-2 rounded-2xl shadow-md w-full">
        {steps.map((step, index) => (
          <>
            {index !== 0 && (
              <div id={index.toString()} className={`flex-1 border-t-2 border-${ false ? "muted" : "primary"} mx-4`}></div>
            )}
            {getStepDesign(step, checkStepCompleted(steps, currentStep, index), index + 1)}
          </>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
