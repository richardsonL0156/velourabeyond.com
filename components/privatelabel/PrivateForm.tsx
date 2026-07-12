"use client";

import { useState } from "react";

export default function PrivateForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    brandName: "",
    businessType: "",
    soapType: "",
    packaging: "",
    quantity: "",
    logoDesign: "No",
    launchDate: "",
    budget: "",
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
      const response = await fetch("/api/private-label", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess(
        "Thank you! We've received your private label inquiry and will contact you within 24 hours."
      );

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        brandName: "",
        businessType: "",
        soapType: "",
        packaging: "",
        quantity: "",
        logoDesign: "No",
        launchDate: "",
        budget: "",
        message: "",
      });

    } catch {
      setError("Unable to submit your request. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section
      id="quote"
      className="bg-[#FCFAF7] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            Private Label Inquiry
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            Let's Build Your Brand
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tell us about your vision and we'll prepare a personalized proposal
            for your private label soap collection.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-16 rounded-[36px] bg-white p-10 shadow-xl"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="rounded-xl border p-4"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="rounded-xl border p-4"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="rounded-xl border p-4"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="rounded-xl border p-4"
            />

            <input
              name="brandName"
              value={form.brandName}
              onChange={handleChange}
              placeholder="Your Brand Name"
              className="rounded-xl border p-4"
            />

            <select
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              className="rounded-xl border p-4"
            >
              <option value="">Business Type</option>
              <option>Startup Brand</option>
              <option>Hotel</option>
              <option>Spa</option>
              <option>Retail Store</option>
              <option>Distributor</option>
              <option>Corporate Gifts</option>
              <option>Other</option>
            </select>

            <select
              name="soapType"
              value={form.soapType}
              onChange={handleChange}
              className="rounded-xl border p-4"
            >
              <option value="">Soap Type</option>
              <option>Bar Soap</option>
              <option>Liquid Soap</option>
              <option>Hotel Amenities</option>
              <option>Gift Set</option>
              <option>Complete Collection</option>
            </select>

            <select
              name="packaging"
              value={form.packaging}
              onChange={handleChange}
              className="rounded-xl border p-4"
            >
              <option value="">Packaging</option>
              <option>Kraft Box</option>
              <option>Luxury Box</option>
              <option>Soap Sleeve</option>
              <option>Hotel Wrapper</option>
              <option>Not Sure Yet</option>
            </select>

            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Estimated Quantity"
              className="rounded-xl border p-4"
            />

            <select
              name="logoDesign"
              value={form.logoDesign}
              onChange={handleChange}
              className="rounded-xl border p-4"
            >
              <option>No Logo Design Needed</option>
              <option>Yes, I Need Logo Design</option>
            </select>

            <input
              name="launchDate"
              value={form.launchDate}
              onChange={handleChange}
              placeholder="Desired Launch Date"
              className="rounded-xl border p-4"
            />

            <input
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="Estimated Budget"
              className="rounded-xl border p-4"
            />

          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={7}
            placeholder="Tell us about your vision, fragrances, packaging ideas, target audience, inspiration, and any special requirements..."
            className="mt-6 w-full rounded-xl border p-4"
          />

          {success && (
            <div className="mt-6 rounded-xl bg-green-50 p-4 text-green-700">
              {success}
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-xl bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-8 rounded-full bg-[#C5A572] px-10 py-4 text-white transition hover:bg-[#B18E56]"
          >
            {loading ? "Sending..." : "Start My Brand"}
          </button>

        </form>

      </div>
    </section>
  );
}