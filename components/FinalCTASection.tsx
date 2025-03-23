"use client";

import { WaitlistForm } from "@/components/waitlist-form";

export function FinalCTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Join Our Waitlist Today
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Stop juggling spreadsheets and sticky notes. Be the first to know
              when Stashify launches.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <WaitlistForm />
          </div>
          <p className="text-sm text-muted-foreground">
            Questions? Contact us at{" "}
            <a href="mailto:hello@weekendlabs.in">hello@weekendlabs.in</a>
          </p>
        </div>
      </div>
    </section>
  );
}
