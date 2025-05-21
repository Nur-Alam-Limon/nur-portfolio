import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req) {
  const token = req.cookies.get('token')?.value;

  const isDashboardRoute = req.nextUrl.pathname.startsWith('/super-admin/dashboard');
  const isRSCRequest = req.nextUrl.searchParams.has('_rsc') || req.nextUrl.searchParams.has('__rsc');

  if (isDashboardRoute && !isRSCRequest) {
    if (!token) {
      return NextResponse.redirect(new URL('/super-admin/login', req.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret); 
  
      return NextResponse.next();
    } catch (err) {
      console.error('JWT Verification Failed:', err);
      return NextResponse.redirect(new URL('/super-admin/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/super-admin/dashboard', '/super-admin/dashboard/:path*'],
};
