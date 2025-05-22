import { connectDB } from '../../../lib/db.js';
import Blog from '../../../models/Blog.js';

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch blogs' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newBlog = await Blog.create(body);
    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create blog' }), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'Blog ID is required' }), { status: 400 });
    }
    await Blog.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Blog deleted' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete blog' }), { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'Blog ID is required' }), { status: 400 });
    }
    const body = await req.json();
    const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true });
    return new Response(JSON.stringify(updatedBlog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update blog' }), { status: 500 });
  }
}
