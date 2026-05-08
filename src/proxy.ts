import { auth } from "@/auth";

export default auth((req) => {
  // Protected routes handled automatically
});

export const config = {
  matcher: ["/dashboard/:path*"],
};