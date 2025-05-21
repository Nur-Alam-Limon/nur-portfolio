"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const initialForm = {
  institution: "",
  degree: "",
  from: "",
  to: "",
  details: "",
};

export default function EducationPage() {
  const [form, setForm] = useState(initialForm);
  const [educations, setEducations] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("/api/education")
      .then((res) => res.json())
      .then(setEducations);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form };

    const res = await fetch("/api/education", {
      method: editingId ? "PUT" : "POST",
      body: JSON.stringify(editingId ? { id: editingId, ...payload } : payload),
    });

    setForm(initialForm);
    setEditingId(null);
    const updated = await fetch("/api/education").then((res) => res.json());
    setEducations(updated);
  };

  const handleEdit = (edu) => {
    setForm(edu);
    setEditingId(edu._id);
  };

  const handleDelete = async (id) => {
    await fetch("/api/education", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    setEducations((prev) => prev.filter((e) => e._id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold my-8 text-accent text-center">Manage Education</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div>
          <Label className="py-4 text-lg">Institution</Label>
          <Input
            placeholder="Institution Name"
            value={form.institution}
            onChange={(e) => setForm({ ...form, institution: e.target.value })}
            className="w-full"
          />
        </div>
        <div>
          <Label className="py-4 text-lg">Degree</Label>
          <Input
            placeholder="B.Sc in CSE"
            value={form.degree}
            onChange={(e) => setForm({ ...form, degree: e.target.value })}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <Label className="py-4 text-lg">From</Label>
            <Input
              placeholder="2020"
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <Label className="py-4 text-lg">To</Label>
            <Input
              placeholder="2025"
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <Label className="py-4 text-lg">Details</Label>
          <Textarea
            placeholder="Any summary or achievement"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />
        </div>

        <Button type="submit" className="w-full my-4 cursor-pointer">
          {editingId ? "Update Education" : "Add Education"}
        </Button>
      </form>

    <div className="text-center text-accent text-2xl pb-6 font-semibold">Education List</div>
      <div className="space-y-6">
        {educations.map((edu) => (
          <Card key={edu._id} className="p-6 text-sm text-white space-y-4 bg-[#1A2A3F]">
            <div>
              <h3 className="text-lg font-semibold">
                {edu.degree} at {edu.institution}
              </h3>
              <p className="text-muted-foreground">{edu.from} - {edu.to}</p>
              <p className="mt-2">{edu.details}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={() => handleEdit(edu)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => handleDelete(edu._id)}>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
