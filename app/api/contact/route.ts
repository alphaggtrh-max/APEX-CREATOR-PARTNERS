import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (character) => entities[character] || character);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit the form again." }, { status: 400 });
  }

  // Quietly accept bot submissions without sending or exposing the honeypot.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 254);
  const creator = clean(body.creator, 120);
  const platform = clean(body.platform, 80);
  const interest = clean(body.interest, 120);
  const message = clean(body.message, 5000);
  const consent = body.consent === "yes" || body.consent === true;

  if (name.length < 2 || !emailPattern.test(email) || message.length < 10 || !consent) {
    return NextResponse.json({ error: "Please check the required fields and privacy consent." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "hello@apex-creator-partners.com";
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json({
      error: "The contact form is not connected to email yet. Please write directly to hello@apex-creator-partners.com.",
    }, { status: 503 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCreator = escapeHtml(creator || "Not provided");
  const safePlatform = escapeHtml(platform || "Not provided");
  const safeInterest = escapeHtml(interest || "Not specified");
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br/>");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New APEX partnership enquiry — ${name}`,
        html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Creator / brand:</strong> ${safeCreator}</p><p><strong>Platform:</strong> ${safePlatform}</p><p><strong>Interested in:</strong> ${safeInterest}</p><hr/><p>${safeMessage}</p>`,
        text: `New website enquiry\nName: ${name}\nEmail: ${email}\nCreator / brand: ${creator || "Not provided"}\nPlatform: ${platform || "Not provided"}\nInterested in: ${interest}\n\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      return NextResponse.json({ error: "We could not send your enquiry right now. Please email us directly at hello@apex-creator-partners.com." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "A temporary sending error occurred. Please email hello@apex-creator-partners.com directly." }, { status: 502 });
  }
}
