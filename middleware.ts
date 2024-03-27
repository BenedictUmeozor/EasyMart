import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

export function middleware(request: NextRequest) {
  console.log(`Received ${request.method} request to ${request.url}`);

  return NextResponse.next();
}
