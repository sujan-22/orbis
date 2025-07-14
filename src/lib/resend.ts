"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

interface InquiryData {
    name: string;
    email: string;
    phone: string;
    message?: string;
}

export async function sendEmail(data: InquiryData) {
    const { name, email, phone, message } = data;

    const html = `
    <div style="font-family: system-ui, sans-serif; color: #003B73; line-height: 1.5;">
      <h1 style="border-bottom: 2px solid #5DE0E6; padding-bottom: 0.5rem;">
        New Catalogue Inquiry
      </h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${
          message
              ? message.replace(/\n/g, "<br/>")
              : "<em>No additional message</em>"
      }</p>
      <hr style="border: none; border-top: 1px solid #004AAD; margin: 2rem 0;" />
      <p style="font-size: 0.9rem; color: #777;">
        This inquiry was submitted via the Orbis Valves Industries catalogue form.
      </p>
    </div>
  `;

    await resend.emails.send({
        to: "sujuroakd@gmail.com",
        from: "Catalogue Inquiry <catalogue@orbisvalves.com>",
        subject: `📥 Catalogue Inquiry from ${name}`,
        html,
    });
}
