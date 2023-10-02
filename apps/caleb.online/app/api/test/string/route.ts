import { NextResponse } from "next/server"

export function GET() {
  const value = "Hello world"
  return NextResponse.json(value)
}
