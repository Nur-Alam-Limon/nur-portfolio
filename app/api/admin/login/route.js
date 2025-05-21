import { connectDB } from "@/lib/db";
import AdminUser from "@/models/AdminUser";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();
  await connectDB();

  const user = await AdminUser.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  // Encode the secret for jose
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  // Create the JWT using jose
  const token = await new SignJWT({ userId: user._id.toString() })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

  const response = NextResponse.json({ token }, { status: 200 });

  // Set token as HttpOnly cookie
  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return response;
}
