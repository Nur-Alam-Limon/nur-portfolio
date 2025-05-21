import { connectDB } from "@/lib/db";
import AdminProfile from "@/models/AdminProfile";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  await AdminProfile.deleteMany();
  const profile = await AdminProfile.create(data);
  return NextResponse.json(profile);
}

export async function GET() {
  await connectDB();
  const profile = await AdminProfile.findOne();
  return NextResponse.json(profile);
}
