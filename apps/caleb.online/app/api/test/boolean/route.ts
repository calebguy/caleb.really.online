import { NextResponse } from "next/server"

export function GET() {
  const value = true;
  return NextResponse.json(value)
}
