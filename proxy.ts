import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";

const publicRoutes = ["/", "/login", "/signup"];
export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  let userRole = null;
  if (accessToken) {
    try {
      const decode = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET as string,
      ) as jwt.JwtPayload;
      userRole = decode.role as string;
      console.log(`User role: ${userRole}`);
    } catch (error) {
      const res = NextResponse.redirect(new URL("/login", request.url));
      res.cookies.delete("accessToken");
      res.cookies.delete("refreshToken");
      return res;
    }
  }
  if (accessToken && ["/login", "/signup"].includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // amder chek korte hobe  public route kon gula .

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));
  if (!isPublic && !accessToken) {
    return NextResponse.redirect("/login");
  }

  /// role based access control er jonno amder role check korte hobe .

  //admin
  //user
  //driver

  //  admin =? /admin-dashboard
  // user =? /dashboard
  // driver =? /driver-dashboard

  const roleGroup: Record<string, string[]> = {
    admin: ["/admin-dashboard", "/admin-settings", "/manage-users"],
    user: ["/dashboard", "/profile"],
    driver: ["/user-dashboard", "/user-profile", "/bit"],
  };

  for (const role in roleGroup) {
    if (roleGroup[role].some((path) => pathname.startsWith(path))) {
      if (userRole !== role) {
        const targetDashboardRoute = getDashboard(userRole);
        if (pathname !== targetDashboardRoute) {
          return NextResponse.redirect(
            new URL(targetDashboardRoute, request.url),
          );
        }
      }
    }
  }

  return NextResponse.next();
}

function getDashboard(role: string | null) {
  if (role == "admin") return "/admin-dashboard";
  if (role == "user") return "/user-dashboard";
  return "/dashboard";
}