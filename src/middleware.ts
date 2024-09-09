import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifyToken } from './services/apis/apiVerifyToken';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  const protectedRoutes = ['/admin', '/orders', '/checkout'];

  if (protectedRoutes.some(route => url.pathname.startsWith(route))) {
    
    const token = request.cookies.get('authToken')?.value || "";
    
    if (!token) {
      url.pathname = '/auth';
      return NextResponse.redirect(url);
    }

    try {
      const result = await verifyToken(token);

      if (!result.valid) {
        url.pathname = '/auth';
        return NextResponse.redirect(url);
      }

      if(url.pathname.startsWith('/admin') && result.role != 'admin') {
        url.pathname = '/401';
        return NextResponse.redirect(url);
      }
      
      return NextResponse.next();
    } catch (error) {
      url.pathname = '/auth';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*', 
    '/orders/:path*', 
    '/checkout/:path*',
    '/((?!api|_next/static|favicon.ico).*)'],
};
