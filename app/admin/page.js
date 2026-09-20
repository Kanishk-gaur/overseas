"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { jobCategories, applicationStatuses } from "@/data/jobCategories";
import { site } from "@/lib/siteConfig";

const statusStyles = {
  new: "bg-blue-100 text-blue-700",
  reviewed: "bg-amber-100 text-amber-700",
  shortlisted: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
};

const categoryNameById = Object.fromEntries(jobCategories.map((c) => [c.id, c.name]));

export default function AdminDashboardPage() {
  const router = useRouter();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");

  async function loadApplications() {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (categoryFilter) params.set("category", categoryFilter);
      if (statusFilter) params.set("status", statusFilter);

      const res = await fetch(`/api/admin/applications?${params.toString()}`);
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to load applications.");
      setApplications(result.applications);
    } catch (err) {
      setError(err.message || "Failed to load applications.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter, statusFilter]);

  const filtered = useMemo(() => {
    if (!search.trim()) return applications;
    const q = search.trim().toLowerCase();
    return applications.filter(
      (a) =>
        a.fullName?.toLowerCase().includes(q) ||
        a.email?.toLowerCase().includes(q) ||
        a.phone?.toLowerCase().includes(q) ||
        a.specificRole?.toLowerCase().includes(q)
    );
  }, [applications, search]);

  async function updateStatus(id, status) {
    setApplications((prev) => prev.map((a) => (a._id === id ? { ...a, status } : a)));
    await fetch(`/api/admin/applications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  }

  async function deleteApplication(id) {
    if (!confirm("Delete this application and its uploaded files? This cannot be undone.")) return;
    setApplications((prev) => prev.filter((a) => a._id !== id));
    await fetch(`/api/admin/applications/${id}`, { method: "DELETE" });
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="flex items-center justify-between bg-navy px-6 py-4">
        <h1 className="text-lg font-bold text-white">{site.name} — Job Applications</h1>
        <button onClick={logout} className="btn-secondary !border-white/40 !py-1.5 !px-4 text-sm">
          Log Out
        </button>
      </header>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg border border-border bg-white px-3 py-2 text-sm"
          >
            <option value="">All Categories</option>
            {jobCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.icon} {c.name}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-border bg-white px-3 py-2 text-sm"
          >
            <option value="">All Statuses</option>
            {applicationStatuses.map((s) => (
              <option key={s} value={s} className="capitalize">
                {s}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search name, email, phone, role…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-w-[220px] flex-1 rounded-lg border border-border bg-white px-3 py-2 text-sm"
          />

          <span className="text-sm text-gray-500">{filtered.length} applications</span>
        </div>

        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

        <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-white">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-navy-dark text-white">
              <tr>
                <th className="px-4 py-3">Applied</th>
                <th className="px-4 py-3">Applicant</th>
                <th className="px-4 py-3">Category / Role</th>
                <th className="px-4 py-3">Experience</th>
                <th className="px-4 py-3">Preferred Country</th>
                <th className="px-4 py-3">Files</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                    Loading…
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                    No applications found.
                  </td>
                </tr>
              ) : (
                filtered.map((a) => (
                  <tr key={a._id} className="border-t border-border align-top">
                    <td className="whitespace-nowrap px-4 py-3 text-gray-500">
                      {a.createdAt ? new Date(a.createdAt).toLocaleDateString() : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-navy">{a.fullName}</p>
                      <p className="text-xs text-gray-500">{a.email}</p>
                      <p className="text-xs text-gray-500">{a.phone}</p>
                      {a.currentLocation && (
                        <p className="text-xs text-gray-400">{a.currentLocation}</p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-navy">
                        {categoryNameById[a.category] || a.category}
                      </p>
                      {a.specificRole && <p className="text-xs text-gray-500">{a.specificRole}</p>}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{a.experienceLevel || "—"}</td>
                    <td className="px-4 py-3 text-gray-600">{a.preferredCountry || "—"}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`/api/admin/applications/${a._id}/resume`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs font-semibold text-gold hover:underline"
                      >
                        View Resume
                      </a>
                      {a.photoFile && (
                        <a
                          href={`/api/admin/applications/${a._id}/resume?type=photo`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block text-xs font-semibold text-gold hover:underline"
                        >
                          View Photo
                        </a>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={a.status}
                        onChange={(e) => updateStatus(a._id, e.target.value)}
                        className={`rounded-full px-2 py-1 text-xs font-semibold capitalize outline-none ${
                          statusStyles[a.status] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {applicationStatuses.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => deleteApplication(a._id)}
                        className="text-xs font-semibold text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
