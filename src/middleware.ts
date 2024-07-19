import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const PUBLIC_ROUTES = [
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/', 
  '/products(.*)',
  '/admin'
]

const isPublicRoute = createRouteMatcher(PUBLIC_ROUTES);

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};