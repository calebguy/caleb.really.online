import { NextResponse } from "next/server"

export function GET() {
  const value = BigInt(123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789).toString()
  return NextResponse.json(value)
}
