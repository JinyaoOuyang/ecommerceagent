// TODO: Implement multi-step brand profile setup wizard

"use client";

import { useState } from "react";
interface WizardStep {
  step: number;
  title: string;
  description: string;
}

const steps: WizardStep[] = [
  {
    step: 1,
    title: "Brand Basics",
    description: "Tell us about your brand name and product category.",
  },
  {
    step: 2,
    title: "Brand Voice",
    description: "Define your brand's tone, voice, and personality.",
  },
  {
    step: 3,
    title: "Target Audience",
    description: "Describe your ideal customer and target market.",
  },
  {
    step: 4,
    title: "Competitive Landscape",
    description: "Identify your unique selling points and key competitors.",
  },
];

export function BrandSetupWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      {/* Step indicators */}
      <div className="flex gap-2">
        {steps.map((step, i) => (
          <div
            key={step.step}
            className={`flex-1 h-1.5 rounded-full ${
              i <= currentStep
                ? "bg-foreground"
                : "bg-black/[.08] dark:bg-white/[.145]"
            }`}
          />
        ))}
      </div>

      {/* Current step */}
      <div className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-4">
        <div>
          <p className="text-xs text-foreground/50 uppercase tracking-wider">
            Step {steps[currentStep].step} of {steps.length}
          </p>
          <h2 className="text-xl font-semibold mt-1">
            {steps[currentStep].title}
          </h2>
          <p className="text-sm text-foreground/60 mt-1">
            {steps[currentStep].description}
          </p>
        </div>

        <div className="min-h-[200px] flex items-center justify-center">
          <p className="text-sm text-foreground/40">
            TODO: Form fields for step {steps[currentStep].step}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={currentStep === 0}
          className="rounded-md border border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-colors disabled:opacity-30"
        >
          Back
        </button>
        <button
          onClick={() =>
            setCurrentStep((s) => Math.min(steps.length - 1, s + 1))
          }
          className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          {currentStep === steps.length - 1 ? "Complete Setup" : "Continue"}
        </button>
      </div>
    </div>
  );
}
