import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

// Custom middleware
export default withAuth(
  function middleware(req) {
    const url = req.nextUrl.clone();

    // Remove `callbackUrl` if present in `/login` redirects
    if (url.searchParams.has("callbackUrl")) {
      url.searchParams.delete("callbackUrl");
      return NextResponse.redirect(url);
    }

    return NextResponse.next(); // Allow the default NextAuth logic
  },
  {
    pages: {
      signIn: '/login', // Redirect to login page
    },
  }
);

// Apply to specific routes
export const config = {
  matcher: ['/projects'], // Protect the `/projects` page
};
