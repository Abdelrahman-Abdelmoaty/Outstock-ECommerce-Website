// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { User } from "./lib/types";
// import { HOST } from "./lib/validations";
// async function isLoggedIn(request: NextRequest) {
//   const userToken = request.cookies.get("userToken")?.value;
//   try {
//     const response = await fetch(`${HOST}api/auth/user-data`, {
//       method: "Get",
//       headers: {
//         authorization: `Bearer ${userToken}`,
//       },
//     });
//     if (response.status !== 200) throw response.status;
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     throw error;
//   }
// }
// export async function middleware(request: NextRequest) {
//   // if (request.nextUrl.pathname.startsWith("/auth/callback")) {
//   //   request.cookies.set("userToken", request.nextUrl.searchParams.get("code") as string);
//   // }
//   if (request.nextUrl.pathname.startsWith("/admin")) {
//     try {
//       const userData: User = await isLoggedIn(request);
//       if (userData.isAdmin) {
//         return NextResponse.next();
//       } else {
//         throw "Not Admin";
//       }
//     } catch {
//       return NextResponse.redirect(new URL("/auth", request.url));
//     }
//   }
//   return NextResponse.next();
// }
