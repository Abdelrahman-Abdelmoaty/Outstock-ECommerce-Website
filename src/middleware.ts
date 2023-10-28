import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const isAdmin = request.cookies.get("isAdmin");
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith("/auth")) {
    const isAuth = request.cookies.get("isAuth");
    if (isAuth) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}
