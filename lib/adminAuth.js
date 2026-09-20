import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE_NAME = "admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours, in seconds

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not set. Add it to your .env.local file (see .env.local.example)."
    );
  }
  return secret;
}

function sign(value) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createSessionToken() {
  const payload = JSON.stringify({ exp: Date.now() + ADMIN_SESSION_MAX_AGE * 1000 });
  const encodedPayload = Buffer.from(payload).toString("base64url");
  const signature = sign(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifySessionToken(token) {
  if (!token) return false;

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return false;

  const expectedSignature = sign(encodedPayload);
  const provided = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) {
    return false;
  }

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString());
    return typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export function verifyAdminPassword(candidate) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !candidate) return false;

  const a = Buffer.from(candidate);
  const b = Buffer.from(adminPassword);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
