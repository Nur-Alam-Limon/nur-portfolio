import { connectDB } from "../../../lib/db.js";
import Experience from "../../../models/Experience.js";

export async function GET(req) {
  await connectDB();
  const experiences = await Experience.find().sort({ createdAt: -1 });
  return Response.json(experiences);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newExp = new Experience({
    ...body,
    stacks: body.stacks || [],
  });
  await newExp.save();
  return Response.json({ message: "Experience added" });
}

export async function PUT(req) {
  await connectDB();
  const { id, ...data } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing experience ID" }), { status: 400 });
  }

  const updated = await Experience.findByIdAndUpdate(id, data, { new: true });
  return Response.json(updated);
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing experience ID" }), { status: 400 });
  }

  await Experience.findByIdAndDelete(id);
  return Response.json({ message: "Experience deleted" });
}
