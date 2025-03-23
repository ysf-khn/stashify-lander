"use client";

import { WaitlistForm } from "@/components/waitlist-form";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Get started with Stashify in just a few simple steps.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <StepCard
            number={1}
            title="Create a Batch"
            description="Add your items and define your process (e.g., polishing, packing)."
          />
          <StepCard
            number={2}
            title="Assign Workers"
            description="Put your team to work and track their progress."
          />
          <StepCard
            number={3}
            title="Manage Costs"
            description="Set prices per piece and mark payments as they come in."
          />
          <StepCard
            number={4}
            title="Review & Grow"
            description="Check simple reports to see what's working."
          />
        </div>
        <div className="flex justify-center mt-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white shadow-md">
        {number}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
