import { NextResponse, NextRequest } from 'next/server'

// Disabled personalization middleware for Vercel Edge Runtime compatibility
// TODO: Re-implement with Edge Runtime compatible personalization if needed

export default function middleware(request: NextRequest) {
  // For now, just pass through all requests
  return NextResponse.next()
}
