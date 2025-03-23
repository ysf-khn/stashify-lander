"use client";

// import Link from "next/link";
import { Package } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-primary-200 bg-primary-50 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary-600" />
          <span className="font-semibold">Stashify</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Stashify. All rights reserved.
        </p>
        {/* <nav className="flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Contact
          </Link>
        </nav> */}
      </div>
    </footer>
  );
}
