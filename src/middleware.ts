import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Token } from './app/types/Token';
import { verifyToken } from './services/apis/apiVerifyToken';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  const protectedRoutes = ['/admin', '/orders', '/checkout'];

  if (protectedRoutes.some(route => url.pathname.startsWith(route))) {
    
    const token = request.cookies.get('authToken');
    
    if (!token) {
      url.pathname = '/auth';
      return NextResponse.redirect(url);
    }

    try {
      
      const result = await verifyToken(token.value);

      if (!result.valid) {
        url.pathname = '/auth';
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
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
