import { connectDB } from "../../../lib/db.js";
import Education from "../../../models/Education.js";

export async function GET(req) {
  await connectDB();
  const educations = await Education.find().sort({ from: -1 });
  return Response.json(educations);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const newEducation = new Education(body);
  await newEducation.save();

  return Response.json({ message: "Education added" });
}

export async function PUT(req) {
  await connectDB();
  const { id, ...data } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing education ID" }), {
      status: 400,
    });
  }

  const updated = await Education.findByIdAndUpdate(id, data, { new: true });
  return Response.json(updated);
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing education ID" }), {
      status: 400,
    });
  }

  await Education.findByIdAndDelete(id);
  return Response.json({ message: "Education deleted" });
}
