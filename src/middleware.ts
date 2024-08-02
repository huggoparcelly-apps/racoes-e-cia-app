import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const PUBLIC_ROUTES = [
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/', 
  '/products(.*)',
  '/cart(.*)',
]

const isPublicRoute = createRouteMatcher(PUBLIC_ROUTES);
const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
]);

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)) {
    auth().protect();
  }

  if (isProtectedRoute(request)) {
    auth().protect(has => {
      return (
        has({ permission: 'org:sys_memberships:manage' }) ||
        has({ permission: 'org:sys_domains_manage' })
      )
    })
  }
});

export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)', 
    "/(api|trpc)(.*)"],
};