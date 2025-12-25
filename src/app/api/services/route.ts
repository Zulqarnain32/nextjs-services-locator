import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Electrician" },
    { id: 2, name: "Plumber" },
    { id: 3, name: "AC Repair" },
    { id: 4, name: "Computer Repair" },
  ]);
}
