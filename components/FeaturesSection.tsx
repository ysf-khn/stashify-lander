"use client";

import { Package, BarChart3, CreditCard, ScanLine, Users } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Stashify?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Everything you need to manage your inventory efficiently and grow
              your business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Package className="h-6 w-6 text-primary-600" />}
            title="Track Every Step"
            description="Follow your items from raw material to packed product, with customizable stages."
          />
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6 text-primary-600" />}
            title="Stay in the Know"
            description="See where your batches are, who's working on them, and what's next - in real time."
          />
          <FeatureCard
            icon={<CreditCard className="h-6 w-6 text-primary-600" />}
            title="Bill with Ease"
            description="Set per-piece prices, track payments, and keep finances clear."
          />
          <FeatureCard
            icon={<ScanLine className="h-6 w-6 text-primary-600" />}
            title="Scan & Save Time"
            description="Upload bills and let OCR pull out the details - no more manual entry."
          />
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6 text-primary-600" />}
            title="Know Your Numbers"
            description="Get monthly summaries of work done and cash flow."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6 text-primary-600" />}
            title="Manage Your Team"
            description="Assign tasks to workers and track their progress efficiently."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow transition-all hover:shadow-lg">
      <div className="rounded-full bg-primary-100 p-2">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
