import { NextResponse } from "next/server"

export function GET() {
  const value = 3.14
  return NextResponse.json(value)
}
