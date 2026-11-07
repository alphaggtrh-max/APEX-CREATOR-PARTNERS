"use client";

import { FormEvent, useState } from "react";

type FormStatus = { kind: "success" | "error"; message: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setSending(true);
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent.");
      setStatus({ kind: "success", message: "Thank you — your enquiry has been sent. We will get back to you as soon as possible." });
      form.reset();
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please email hello@apex-creator-partners.com instead.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Full name<input name="name" type="text" autoComplete="name" placeholder="Your name" minLength={2} maxLength={100} required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label>
      </div>
      <div className="form-row">
        <label>Creator name / brand <span className="optional">OPTIONAL</span><input name="creator" type="text" placeholder="How should we refer to your brand?" maxLength={120} /></label>
        <label>Primary platform<select name="platform" defaultValue=""><option value="" disabled>Select a platform</option><option>OnlyFans</option><option>Fansly</option><option>Instagram</option><option>TikTok</option><option>Other</option></select></label>
      </div>
      <label>What would you like help with?<select name="interest" defaultValue="Growth strategy"><option>Growth strategy</option><option>Content direction</option><option>Business operations</option><option>Full creator management</option><option>Not sure yet — let's talk</option></select></label>
      <label>Tell us a little about your goals<textarea name="message" rows={5} placeholder="Where are you now, and what would you like to build?" minLength={10} maxLength={5000} required /></label>
      <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>I have read the <a href="/privacy" target="_blank" rel="noreferrer">Privacy Notice</a> and agree that APEX may use these details to respond to my enquiry.</span></label>
      <button className="button button-primary form-submit" type="submit" disabled={sending}>{sending ? "Sending…" : "Send enquiry"} <span>↗</span></button>
      <p className="form-note">Please do not include passwords, payment details or explicit content in this form.</p>
      {status && <p className={`form-status ${status.kind}`} role="status" aria-live="polite">{status.message}</p>}
    </form>
  );
}
