// TODO: Implement brand profile wizard / onboarding flow

import { BrandSetupWizard } from "@/components/BrandSetupWizard";

export default function OnboardingPage() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Brand Onboarding</h1>
        <p className="text-foreground/60 mt-1">
          Set up your brand profile so the AI agent can tailor recommendations to your business.
        </p>
      </div>

      <BrandSetupWizard />
    </div>
  );
}
