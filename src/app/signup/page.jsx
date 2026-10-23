"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "user",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Account created successfully!");
        // ফর্ম রিসেট
        setFormData({ name: "", email: "", phone: "", role: "user" });
        // সরাসরি users পেজে নিয়ে যাওয়া এবং পেজ রিফ্রেশ করা
        router.push("/users");
        router.refresh();
      } else {
        alert("Failed to create user");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-white shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <div>
          <label className="text-sm text-zinc-400">Full Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full mt-1.5 rounded-lg border border-zinc-700 bg-zinc-800/50 p-2.5 text-sm focus:border-sky-500 focus:outline-none"
            placeholder="Rahim Ahmed"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">Email Address</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full mt-1.5 rounded-lg border border-zinc-700 bg-zinc-800/50 p-2.5 text-sm focus:border-sky-500 focus:outline-none"
            placeholder="rahim@example.com"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full mt-1.5 rounded-lg border border-zinc-700 bg-zinc-800/50 p-2.5 text-sm focus:border-sky-500 focus:outline-none"
            placeholder="017xxxxxxxx"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">Role</label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full mt-1.5 rounded-lg border border-zinc-700 bg-zinc-800/50 p-2.5 text-sm focus:border-sky-500 focus:outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 rounded-lg bg-sky-500 py-2.5 font-medium text-white transition hover:bg-sky-600 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}