
import { connectDB } from '../../../lib/db.js'; 
import Projects from '../../../models/Projects.js';

export async function GET() {
  try {
    await connectDB();
    const projects = await Projects.find();
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newProject = await Projects.create({
      ...body,
      stack: body.stack.map(name => ({ name })),
    });

    return new Response(JSON.stringify(newProject), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create project' }), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'Project ID is required' }), { status: 400 });
    }
    await Projects.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Project deleted' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete project' }), { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'Project ID is required' }), { status: 400 });
    }
    const body = await req.json();

    const updatedProject = await Projects.findByIdAndUpdate(
      id,
      {
        ...body,
        stack: body.stack.map(name => ({ name })),
      },
      { new: true }
    );

    return new Response(JSON.stringify(updatedProject), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update project' }), { status: 500 });
  }
}
