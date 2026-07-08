"use client";

import { Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { siteContact } from "@/lib/site-data";

type FormState = {
  name: string;
  phone: string;
  age: string;
  message: string;
};

const initialState: FormState = { name: "", phone: "", age: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.age.trim()) {
      setStatus("error");
      return;
    }
    setStatus("success");
    window.open(siteContact.whatsapp, "_blank", "noopener,noreferrer");
    setForm(initialState);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input aria-label="Parent name" placeholder="Parent name" value={form.name} onChange={(event) => updateField("name", event.target.value)} />
      <input aria-label="Phone number" placeholder="Phone number" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
      <input aria-label="Child age" placeholder="Child age" value={form.age} onChange={(event) => updateField("age", event.target.value)} />
      <textarea aria-label="Message" placeholder="Tell us the student's class, goals or learning needs" rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} />
      <button type="submit">Request Counselling <Send className="size-5" aria-hidden /></button>
      {status === "error" && <p className="form-status error">Please add name, phone number and student class/age.</p>}
      {status === "success" && <p className="form-status success"><Sparkles className="size-4" aria-hidden /> Opening WhatsApp with dummy counselling contact. We can replace this with real CRM/email later.</p>}
    </form>
  );
}
