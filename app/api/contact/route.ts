import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contactSchema";
import { z } from "zod";
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // validate with zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: z.treeifyError(parsed.error) },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL,
        subject: `New message from ${name}`,
        text: `From: ${name} <${email}>\n\nMessage: ${message}`,
      }),
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    return NextResponse.json({ ok: true, status: "success" });
  } catch (error) {
    return NextResponse.json(
      { error: process.env.NODE_ENV === "development" ? String(error) : "Failed to send message" },
      { status: 500 }
    );
  }
}