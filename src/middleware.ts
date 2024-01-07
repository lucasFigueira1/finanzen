import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;

  const isPublicPath = pathname === '/login' || pathname === '/signup' || pathname === '/';
  const token = request.cookies.get('token')?.value || '';


  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(`/profile`, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/login',
    '/signup',
  ]
}