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
      console.log("não tenho token");
      
      url.pathname = '/auth';
      return NextResponse.redirect(url);
    }

    try {
      const tokenBody: Token = {
        token: token.value
      }
      
      const result = await verifyToken(tokenBody);

      if (!result.valid) {
        console.log("token não valido");
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
