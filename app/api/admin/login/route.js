import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_COOKIE_NAME,
  ADMIN_SESSION_MAX_AGE,
  createSessionToken,
  verifyAdminPassword,
} from "@/lib/adminAuth";

export async function POST(request) {
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json(
      { error: "Admin login is not configured on the server." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!verifyAdminPassword(body?.password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE,
  });

  return NextResponse.json({ success: true });
}
