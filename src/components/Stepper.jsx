import React, { useState } from "react";
import "../css/stepper.css";
import { TiTick } from "react-icons/ti";
import { Button } from "./Button";
const Stepper = () => {
  const steps = ["Manager Decision", "Admin Decision", "Approver Decision"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <Button
          variant={"info"}
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
          className="w-24 self-center mt-12"
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </Button>
      )}
    </div>
  );
};

export default Stepper;
