import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, phone, message } = await req.json();

    try {
        const data = await resend.emails.send({
            from: "Orbis Valves <info@orbisvalves.com>",
            to: "sujurokad@gmail.com",
            subject: "New Catalogue Inquiry - Orbis Valves",
            html: `
        <h2>New Catalogue Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message || "N/A"}</p>
        <br/>
        <hr />
        <p style="font-size: 12px; color: gray;">Sent via Orbis Valves website</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ success: false, error });
    }
}
