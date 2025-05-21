"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setLoading(false);

    if (res.ok) {
      router.push("/super-admin/dashboard");
    } else {
      console.error("Error:", result.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-3xl space-y-6 border p-12 rounded-xl shadow-md bg-[#1A2A3F]">
        <h2 className="text-2xl font-semibold text-center text-white py-4">
          Admin Login
        </h2>
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          className="w-full bg-white text-black"
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          value={data.password}
          className="w-full bg-white text-black"
        />
        <Button
          type="button"
          className="w-full my-4"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </div>
  );
}
