"use client";

import { CheckCircle2 } from "lucide-react";

export function BuiltForYouSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Built for You
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Stashify is designed to meet the needs of everyone in your
              business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          <UserTypeCard
            title="Business Owners"
            description="Run operations smoothly without the chaos."
            features={[
              "Complete visibility",
              "Financial tracking",
              "Growth insights",
            ]}
          />
          <UserTypeCard
            title="Workers"
            description="Know your tasks and update progress with a tap."
            features={["Clear assignments", "Simple updates", "Work tracking"]}
          />
          <UserTypeCard
            title="Bookkeepers"
            description="Save hours with OCR and payment tracking."
            features={[
              "Automated data entry",
              "Payment records",
              "Monthly reports",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface UserTypeCardProps {
  title: string;
  description: string;
  features: string[];
}

function UserTypeCard({ title, description, features }: UserTypeCardProps) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <ul className="mt-2 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-secondary-500" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
