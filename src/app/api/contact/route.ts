import { NextResponse } from "next/server";

type ContactBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  equity?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const { firstName, lastName, email, equity } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { error: "E-Mail ist erforderlich" },
      { status: 400 },
    );
  }

  const payload = {
    firstName: firstName ?? "",
    lastName: lastName ?? "",
    email,
    phone: body.phone ?? "",
    equity: equity ?? "",
    receivedAt: new Date().toISOString(),
  };

  // TODO: E-Mail-Versand via Resend oder SendGrid aktivieren, sobald Credentials gesetzt sind.
  // Beispiel Resend:
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'kontakt@kapitalanlagen-deutschland.de',
  //   to: process.env.CONTACT_TO_EMAIL!,
  //   subject: `Neue Terminanfrage: ${payload.firstName} ${payload.lastName}`,
  //   text: JSON.stringify(payload, null, 2),
  // });

  if (process.env.NODE_ENV === "development") {
    console.info("[contact] Neue Anfrage:", payload);
  }

  return NextResponse.json({
    ok: true,
    message: "Anfrage empfangen",
  });
}
