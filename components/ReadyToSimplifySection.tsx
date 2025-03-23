"use client";

import { Button } from "@/components/ui/button";

export function ReadyToSimplifySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Simplify?
              </h2>
              <p className="md:text-xl">
                Join other businesses waiting to streamline their inventory with
                Stashify. No complicated setup, no steep learning curve - just
                results.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-secondary-foreground"
                onClick={() => {
                  const waitlistButtons = document.querySelectorAll("button");
                  for (const button of waitlistButtons) {
                    if (button.textContent === "Join the Waitlist") {
                      button.click();
                      break;
                    }
                  }
                }}
              >
                Join the Waitlist
              </Button>
            </div>
            <p className="text-sm opacity-90">
              Be the first to know when we launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
