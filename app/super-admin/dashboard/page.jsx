"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [form, setForm] = useState({
    picture: "",
    resume: "",
    github: "",
    linkedin: "",
    facebook: "",
    medium: "",
  });

  const [profile, setProfile] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fetchProfile = async () => {
    const res = await fetch("/api/admin/profile");
    const data = await res.json();
    setProfile(data);
    if (data) setForm(data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admin/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setProfile(data);
   
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-accent text-center">
        Admin Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Picture */}
        <div>
          <img
            src={
              form.picture
                ? form.picture
                : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
            }
            alt="Preview"
            className="w-28 h-28 mb-4 object-cover rounded text-center mx-auto"
          />

          <label className="block mb-1">Picture URL</label>
          <input
            type="text"
            name="picture"
            value={form.picture}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
            placeholder="https://i.imgur.com/example.jpg"
          />
        </div>

        {/* Resume */}
        <div>
          <label className="block mb-1">Resume (Google Drive Link)</label>
          <input
            type="text"
            name="resume"
            value={form.resume}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
            placeholder="https://drive.google.com/..."
          />
        </div>

        {/* Social Links */}
        {["github", "linkedin", "facebook", "medium"].map((field) => (
          <div key={field}>
            <label className="capitalize block mb-1">{field} link</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
              placeholder={`https://${field}.com/your-profile`}
            />
          </div>
        ))}

        <Button type="submit" className="mt-4 w-full">
            Save Profile
        </Button>

      </form>

      
    </div>
  );
}
