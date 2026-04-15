"use client";
import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.phone) {
      setError("Please fill all fields");
      return;
    }

    if (form.phone.length < 10) {
      setError("Enter valid phone number");
      return;
    }

    setError("");

    // WhatsApp message (high conversion 🔥)
    const message = `Hi, I want to book Lip Blushing.\nName: ${form.name}\nPhone: ${form.phone}`;
    const whatsappURL = `https://wa.me/918750427198?text=${encodeURIComponent(
      message,
    )}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="p-3 border rounded"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="p-3 border rounded"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="bg-primary text-white p-3 rounded">
        Book via WhatsApp
      </button>
    </form>
  );
}
