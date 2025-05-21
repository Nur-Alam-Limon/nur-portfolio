"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
    stack: "",
    image: "",
    live: "",
    github: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load projects");
    }
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add or Edit project
  const handleSubmit = async () => {
    const payload = {
      ...form,
      stack: form.stack.split(",").map((s) => s.trim()),
    };

    try {
      let res;
      if (editId) {
        // Edit existing project (PATCH)
        res = await fetch(`/api/projects?id=${editId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // Add new project (POST)
        res = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) throw new Error("Failed to save project");

      const savedProject = await res.json();

      if (editId) {
        setProjects((prev) =>
          prev.map((p) => (p._id === editId ? savedProject : p))
        );
      } else {
        setProjects((prev) => [savedProject, ...prev]);
      }

      // Reset form and close modal
      setForm({
        category: "",
        title: "",
        description: "",
        stack: "",
        image: "",
        live: "",
        github: "",
      });
      setEditId(null);
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete project");

      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete project");
    }
  };

  // Open edit modal and fill form
  const handleEdit = (project) => {
    setForm({
      category: project.category,
      title: project.title,
      description: project.description,
      stack: project.stack.map((s) => s.name).join(", "),
      image: project.image || "",
      live: project.live || "",
      github: project.github || "",
    });
    setEditId(project._id);
    setOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Dialog
          open={open}
          onOpenChange={(open) => {
            setOpen(open);
            if (!open) {
              setEditId(null);
              setForm({
                category: "",
                title: "",
                description: "",
                stack: "",
                image: "",
                live: "",
                github: "",
              });
            }
          }}
        >
          <DialogTrigger asChild>
            <Button className="cursor-pointer">Add Project</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-[#001021] max-h-[80vh] overflow-y-auto y-scrollable">
            <DialogHeader>
              <DialogTitle className="py-6 text-center text-accent text-xl">
                {editId ? "Edit Project" : "Add New Project"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-white/80"
              >
                Category
              </label>
              <Input
                id="category"
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
                className="w-full"
              />

              <label
                htmlFor="title"
                className="block text-sm font-medium text-white/80"
              >
                Title
              </label>
              <Input
                id="title"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="w-full"
              />

              <label
                htmlFor="description"
                className="block text-sm font-medium text-white/80"
              >
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full"
              />

              <label
                htmlFor="stack"
                className="block text-sm font-medium text-white/80"
              >
                Stack (comma separated)
              </label>
              <Input
                id="stack"
                name="stack"
                placeholder="Stack (comma separated)"
                value={form.stack}
                onChange={handleChange}
                className="w-full"
              />

              <label
                htmlFor="image"
                className="block text-sm font-medium text-white/80"
              >
                Image URL
              </label>
              <Input
                id="image"
                name="image"
                placeholder="Image URL"
                value={form.image}
                onChange={handleChange}
                className="w-full"
              />

              <label
                htmlFor="live"
                className="block text-sm font-medium text-white/80"
              >
                Live Link
              </label>
              <Input
                id="live"
                name="live"
                placeholder="Live Link"
                value={form.live}
                onChange={handleChange}
                className="w-full"
              />

              <label
                htmlFor="github"
                className="block text-sm font-medium text-white/80"
              >
                GitHub Link
              </label>
              <Input
                id="github"
                name="github"
                placeholder="GitHub Link"
                value={form.github}
                onChange={handleChange}
                className="w-full"
              />

              <Button onClick={handleSubmit} className="my-6 cursor-pointer">
                {editId ? "Save Changes" : "Add Project"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="flex items-start gap-6 p-4 border border-gray-700 rounded-md bg-[#001021]"
          >
            <div>
              <div className="text-3xl font-extrabold text-transparent text-outline select-none pointer-events-none my-4">
                {String(index + 1).padStart(2, "0")}
              </div>
         
              <div className="w-60 h-48 flex-shrink-0 relative overflow-hidden rounded-md border border-gray-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

     
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mt-4">
                <h2 className="text-xl font-bold text-white capitalize">
                  {project.title}
                </h2>
                <span className="px-2 py-0.5 text-xs font-semibold uppercase rounded bg-accent text-primary">
                  {project.category}
                </span>
              </div>

              <p className="text-white/70 my-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 my-3">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#1A2A3F] text-accent text-s px-2 py-1 rounded"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4 text-accent my-2">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Live Project :{" "}
                    <span className="text-accent">{project.live}</span>
                  </a>
                ) : (
                  <span className="text-white/30 cursor-not-allowed select-none">
                    Live Project :{" "}
                    <span className="text-accent">{project.live}</span>
                  </span>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Github Repo :{" "}
                    <span className="text-accent">{project.github}</span>
                  </a>
                ) : (
                  <span className="text-white/30 cursor-not-allowed select-none">
                    Github Repo :{" "}
                    <span className="text-accent">{project.github}</span>
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-6 mb-4 justify-end">
                <button
                  onClick={() => handleEdit(project)}
                  className="px-3 py-1 bg-accent text-primary font-semibold rounded hover:bg-accent-hover transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="px-3 py-1 border border-accent text-accent font-semibold rounded hover:bg-accent hover:text-primary transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
