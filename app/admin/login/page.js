"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/lib/siteConfig";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Login failed.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-navy-dark p-8"
      >
        <h1 className="text-center text-lg font-bold text-white">{site.name} Admin</h1>
        <p className="mt-1 text-center text-xs text-white/50">Sign in to view job applications</p>

        <label className="mt-6 block text-xs font-semibold text-white/60">Admin Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
          className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-gold"
        />

        {error && <p className="mt-3 text-sm font-medium text-red-400">{error}</p>}

        <button type="submit" disabled={loading} className="btn-primary mt-6 w-full disabled:opacity-60">
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
