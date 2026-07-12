"use client";

import { useState } from "react";

export default function BulkForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "",
    quantity: "",
    products: "",
    privateLabel: "No",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/bulk-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setSuccess(
        "Thank you! Your quote request has been sent. We'll contact you within 24 hours."
      );

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        businessType: "",
        quantity: "",
        products: "",
        privateLabel: "No",
        message: "",
      });
    } catch (err) {
      setError("Unable to send your request. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section
      id="quote"
      className="bg-[#FDFBF7] py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-5xl font-light text-[#1F1F1F]">
            Request a Bulk Quote
          </h2>

          <p className="mt-4 text-gray-600">
            Tell us about your project and we'll prepare a customized quotation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl bg-white p-10 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-xl border p-4"
            />

            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="rounded-xl border p-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-xl border p-4"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="rounded-xl border p-4"
            />

            <input
              name="businessType"
              placeholder="Business Type"
              value={form.businessType}
              onChange={handleChange}
              className="rounded-xl border p-4"
            />

            <input
              name="quantity"
              placeholder="Estimated Quantity"
              value={form.quantity}
              onChange={handleChange}
              className="rounded-xl border p-4"
            />
          </div>

          <input
            name="products"
            placeholder="Products Needed"
            value={form.products}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <select
            name="privateLabel"
            value={form.privateLabel}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          >
            <option>No Private Label</option>
            <option>Yes - Private Label</option>
          </select>

          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          {success && (
            <div className="rounded-xl bg-green-50 p-4 text-green-700">
              {success}
            </div>
          )}

          {error && (
            <div className="rounded-xl bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#C5A572] px-10 py-4 text-white transition hover:bg-[#B18E56]"
          >
            {loading ? "Sending..." : "Request Quote"}
          </button>
        </form>

      </div>
    </section>
  );
}