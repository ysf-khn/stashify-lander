"use client";

import { CheckCircle2 } from "lucide-react";

const features = [
  "Custom batch tracking",
  "Real-time updates",
  "Worker assignments",
  "Per-piece billing",
  "OCR bill scanning",
  "Monthly reports",
];

export function FeaturesGlanceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-primary-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Features at a Glance
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Everything you need to manage your inventory efficiently.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-4 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
