"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phoneNumber.trim().replace(/[^\d+\-() ]/g, "");
    const sanitizedCompany = companyName.trim();

    // Validate required inputs
    if (!sanitizedName || sanitizedName.length < 2) {
      setError("Please enter a valid name (at least 2 characters)");
      setIsSubmitting(false);
      return;
    }

    if (!sanitizedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Validate optional inputs only if they're provided
    if (sanitizedPhone && sanitizedPhone.length < 10) {
      setError("Please enter a valid phone number (at least 10 digits)");
      setIsSubmitting(false);
      return;
    }

    if (sanitizedCompany && sanitizedCompany.length < 2) {
      setError("Please enter a valid company name (at least 2 characters)");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: sanitizedName,
          email: sanitizedEmail,
          ...(sanitizedPhone && { phoneNumber: sanitizedPhone }),
          ...(sanitizedCompany && { companyName: sanitizedCompany }),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setIsSuccess(true);
      // Reset form after successful submission
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCompanyName("");
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    // Reset success state when dialog is closed
    if (!newOpen) {
      setIsSuccess(false);
    }
  };

  const validateEmail = (email: string) => {
    if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  const validatePhone = (phone: string) => {
    if (phone && phone.length < 10) {
      setError("Please enter a valid phone number (at least 10 digits)");
    } else {
      setError("");
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-primary-600 hover:bg-primary-700 text-white h-[45px]"
        size="lg"
      >
        Join the Waitlist
      </Button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="rounded-full bg-primary-100 p-3 mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary-600" />
              </div>
              <DialogTitle className="text-xl mb-2">
                You&apos;re on the list!
              </DialogTitle>
              <DialogDescription>
                Thanks for joining the Stashify waitlist. We&apos;ll notify you
                when we launch!
              </DialogDescription>
              <Button
                className="mt-6 bg-primary-600 hover:bg-primary-700 text-white"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Join the Stashify Waitlist</DialogTitle>
                <DialogDescription>
                  Be the first to know when Stashify launches. We&apos;ll send
                  you an email with early access.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (e.target.value && e.target.value.length < 2) {
                        setError("Name must be at least 2 characters");
                      } else {
                        setError("");
                      }
                    }}
                    onBlur={(e) => {
                      if (!e.target.value.trim()) {
                        setError("Name is required");
                      }
                    }}
                    placeholder="Enter your name"
                    required
                    minLength={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                    onBlur={(e) => {
                      if (!e.target.value.trim()) {
                        setError("Email is required");
                      } else {
                        validateEmail(e.target.value);
                      }
                    }}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      const sanitized = e.target.value.replace(
                        /[^\d+\-() ]/g,
                        ""
                      );
                      setPhoneNumber(sanitized);
                      validatePhone(sanitized);
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name (Optional)</Label>
                  <Input
                    id="companyName"
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      if (e.target.value && e.target.value.length < 2) {
                        setError("Company name must be at least 2 characters");
                      } else {
                        setError("");
                      }
                    }}
                    placeholder="Enter your company name"
                  />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                    disabled={isSubmitting || !!error}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
