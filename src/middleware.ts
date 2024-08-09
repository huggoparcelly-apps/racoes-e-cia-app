
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get('authToken');

  const protectedRoutes = ['/admin', '/order', '/checkout'];

  if (protectedRoutes.some(route => url.pathname.startsWith(route))) {
    if (!token) {
      url.pathname = '/auth';
      return NextResponse.redirect(url);
    }

    try {
      // validação do token
      
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
