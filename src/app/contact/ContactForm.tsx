"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type Status = { type: "success" | "error" | null; message: string };

const inputClass =
  "w-full rounded-2xl border border-[var(--mm-line)] bg-[var(--mm-paper)] px-5 py-4 text-[15px] text-[var(--mm-ink)] placeholder:text-[var(--mm-muted)]/70 focus:outline-none focus:border-[var(--mm-ink)] focus:bg-white disabled:opacity-50";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ type: "success", message: data.message || "Message sent! We'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send message. Please try again later." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: null, message: "" });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block mb-2 text-sm font-medium">Your name</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ada Okafor" required disabled={isSubmitting} autoComplete="name" className={inputClass} />
        </label>
        <label className="block">
          <span className="block mb-2 text-sm font-medium">Email address</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required disabled={isSubmitting} autoComplete="email" className={inputClass} />
        </label>
      </div>
      <label className="block">
        <span className="block mb-2 text-sm font-medium">How can we help?</span>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us what you need…" rows={6} required disabled={isSubmitting} className={`${inputClass} resize-none`} />
      </label>

      {status.type && (
        <p
          role="status"
          className={`rounded-2xl px-5 py-4 text-sm font-medium ${
            status.type === "success" ? "bg-[var(--mm-lime)]/40 text-[var(--mm-ink)]" : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.type === "success" ? "✓ " : "✕ "}
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--mm-ink)] text-white px-8 h-13 py-4 text-[15px] font-medium hover:bg-[var(--mm-ink-2)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>Send message →</>
        )}
      </button>
    </form>
  );
}
