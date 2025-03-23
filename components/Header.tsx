"use client";

import Link from "next/link";
import { Package } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-primary-600" />
          <span className="text-xl font-bold">Stashify</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            How It Works
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <WaitlistForm />
        </div>
      </div>
    </header>
  );
}
