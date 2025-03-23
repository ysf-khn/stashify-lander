import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Waitlist } from "@/lib/models/waitlist";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phoneNumber, companyName } = body;

    // Sanitize inputs
    const sanitizedName = name?.trim();
    const sanitizedEmail = email?.trim().toLowerCase();
    const sanitizedPhone = phoneNumber?.trim().replace(/[^\d+\-() ]/g, "");
    const sanitizedCompany = companyName?.trim();

    // Validate required fields
    if (!sanitizedName || sanitizedName.length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (at least 2 characters)" },
        { status: 400 }
      );
    }

    if (
      !sanitizedEmail ||
      !sanitizedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Validate optional fields if provided
    if (sanitizedPhone && sanitizedPhone.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid phone number (at least 10 digits)" },
        { status: 400 }
      );
    }

    if (sanitizedCompany && sanitizedCompany.length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid company name (at least 2 characters)" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDatabase();

    // Check if email already exists
    const existingUser = await Waitlist.findOne({ email: sanitizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Create new waitlist entry with optional fields
    const waitlistEntry = await Waitlist.create({
      name: sanitizedName,
      email: sanitizedEmail,
      ...(sanitizedPhone && { phoneNumber: sanitizedPhone }),
      ...(sanitizedCompany && { companyName: sanitizedCompany }),
    });

    return NextResponse.json(
      { message: "Successfully joined waitlist", data: waitlistEntry },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
