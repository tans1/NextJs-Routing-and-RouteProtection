import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

// matcher allows  to filter Middleware to run on specific paths.
// we can match a single path or multiple paths with an array syntax
export const config = {
    matcher: '/about',
  }

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // ! do the validation logic here, like decoding and validating token
  return NextResponse.redirect( new URL('/login', request.url))
}
 
