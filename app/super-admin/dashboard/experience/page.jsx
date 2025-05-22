"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  position: "",
  from: "",
  to: "",
  stacks: "",
  summary: "",
  icon: "",
};

export default function ExperiencePage() {
  const [form, setForm] = useState(initialForm);
  const [experiences, setExperiences] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then(setExperiences);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      stacks: form.stacks.split(",").map((s) => s.trim()),
    };

    const res = await fetch("/api/experience", {
      method: editingId ? "PUT" : "POST",
      body: JSON.stringify(editingId ? { id: editingId, ...payload } : payload),
    });

    setForm(initialForm);
    setEditingId(null);

    const updated = await fetch("/api/experience").then((res) => res.json());
    setExperiences(updated);
  };

  const handleEdit = (exp) => {
    setForm({ ...exp, stacks: exp.stacks.join(", ") });
    setEditingId(exp._id);
  };

  const handleDelete = async (id) => {
    await fetch("/api/experience", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    setExperiences((prev) => prev.filter((e) => e._id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold my-8 text-accent text-center">
        Manage Experience
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div>
          <Label className="py-4 text-lg">Organization Name</Label>
          <Input
            placeholder="Organization Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full"
          />
        </div>
        <div>
          <Label className="py-4 text-lg">Position</Label>
          <Input
            placeholder="Position"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <Label className="py-4 text-lg">From</Label>
            <Input
              placeholder="From"
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <Label className="py-4 text-lg">To</Label>
            <Input
              placeholder="To"
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <Label className="py-4 text-lg">Stacks (comma separated)</Label>
          <Input
            placeholder="React, Node, MongoDB"
            value={form.stacks}
            onChange={(e) => setForm({ ...form, stacks: e.target.value })}
            className="w-full"
          />
        </div>
        <div>
          <Label className="py-4 text-lg">Summary</Label>
          <Textarea
            placeholder="Write a summary of your experience"
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
          />
        </div>
        <div>
          <Label className="py-4 text-lg">Icon Image Link (optional)</Label>
          <Input
            placeholder="https://example.com/logo.png"
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
            className="w-full"
          />
        </div>
        {form.icon && (
          <img
            src={form.icon}
            alt="Icon Preview"
            className="w-16 h-16 object-contain rounded"
          />
        )}
        <Button type="submit" className="w-full my-4 cursor-pointer">
          {editingId ? "Update Experience" : "Add Experience"}
        </Button>
      </form>
      <div className="text-center text-accent text-2xl pb-6 font-semibold">
        Experience List
      </div>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card
            key={exp._id}
            className="p-6 text-sm text-white space-y-4 bg-[#1A2A3F]"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  {exp.position} at {exp.name}
                </h3>
                <p className="text-muted-foreground my-2">
                  {exp.from} - {exp.to}
                </p>
                <p className="my-4">{exp.summary}</p>
                <p className="text-white/70 text-md">
                  Stacks: {exp.stacks.join(", ")}
                </p>
              </div>
              {exp.icon && (
                <img
                  src={exp.icon}
                  alt="Icon"
                  className="w-12 h-12 object-contain rounded"
                />
              )}
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={() => handleEdit(exp)} className="cursor-pointer">
                Edit
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleDelete(exp._id)}
                className="border border-white cursor-pointer"
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
