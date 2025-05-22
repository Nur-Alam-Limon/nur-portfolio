"use client";

import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    _id: null,  // store id here when editing
    title: "",
    content: "",
    author: "",
    image: "",
    tags: "",
  });

  const quillRef = useRef(null);
  const [quill, setQuill] = useState(null);

  // Fetch all blogs from API
  const fetchBlogs = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    setBlogs(data);
  };

  // Submit handler for both create and update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = quill?.root.innerHTML || "";
    const tags = form.tags.split(",").map((tag) => tag.trim());

    if (form._id) {
      // Update blog
      await fetch(`/api/blogs?id=${form._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, content, tags }),
      });
    } else {
      // Create new blog
      await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, content, tags }),
      });
    }

    // Reset form and quill editor after submission
    setForm({ _id: null, title: "", content: "", author: "", image: "", tags: "" });
    if (quill) quill.root.innerHTML = "";
    fetchBlogs();
  };

  // Populate form for editing when clicking edit button
  const handleEdit = (blog) => {
    setForm({
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      author: blog.author,
      image: blog.image || "",
      tags: blog.tags.join(", "),
    });

    // Set quill content
    setTimeout(() => {
      if (quill) {
        quill.root.innerHTML = blog.content;
      }
    }, 0);
  };

  // Delete blog by id
  const handleDelete = async (id) => {
    await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
    fetchBlogs();
  };

  useEffect(() => {
    if (quillRef.current && !quill) {
      const q = new Quill(quillRef.current, {
        theme: "snow",
        placeholder: "Write your blog content here...",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });
      setQuill(q);
    }
  }, [quillRef, quill]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold my-8 text-accent text-center">
        Blog Management
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div className="space-y-1">
          <Label htmlFor="title" className="py-4 text-lg">Title</Label>
          <Input
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter blog title"
            className="w-full"
          />
        </div>

        <div className="space-y-1">
          <Label className="py-4 text-lg">Content</Label>
          <div ref={quillRef} className="border rounded min-h-[200px] p-2" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="author" className="py-4 text-lg">Author</Label>
          <Input
            id="author"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            placeholder="Author name"
            className="w-full"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="image" className="py-4 text-lg">Image URL</Label>
          <Input
            id="image"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            placeholder="Image link"
            className="w-full"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="tags" className="py-4 text-lg">Tags (comma separated)</Label>
          <Input
            id="tags"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="e.g., tech, coding, react"
            className="w-full"
          />
        </div>

        <Button type="submit" className="w-full mt-4 cursor-pointer">
          {form._id ? "Update Blog" : "Add Blog"}
        </Button>
      </form>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border border-white/10 p-4 rounded shadow bg-gray-900"
          >
            <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
            <p className="text-sm text-muted-foreground">by {blog.author}</p>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="prose mt-2 text-white"
            />
            <p className="text-sm text-gray-400 mt-2">
              Tags: {blog.tags.join(", ")}
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" onClick={() => handleEdit(blog)} className="cursor-pointer">
                Edit
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleDelete(blog._id)}
                className="border border-white cursor-pointer"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
