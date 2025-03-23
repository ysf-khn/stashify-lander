"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container px-6 py-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
          <div className="w-full max-w-[800px] space-y-8">
            <div className="space-y-5">
              <h1 className="text-[32px] leading-tight font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                Simplify Your <br className="sm:hidden" />
                Inventory. Grow Your <br className="sm:hidden" />
                Business.
              </h1>
              <p className="text-base text-muted-foreground/90 md:text-xl max-w-[540px] mx-auto px-1">
                Take control of your inventory with Stashify - a smart,
                affordable tool designed for businesses like yours. Track
                batches, manage workers, and handle billing - all in one place.
              </p>
            </div>
            <div className="flex flex-col w-full gap-4 min-[400px]:flex-row justify-center px-1">
              <WaitlistForm />
              <Button
                variant="outline"
                size="lg"
                className="border-primary-300 hover:bg-primary-50 text-primary-700 w-full min-[400px]:w-auto h-[45px] text-base"
                asChild
              >
                <Link
                  href="#features"
                  className="flex items-center justify-center"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
