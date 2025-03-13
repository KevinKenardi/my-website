import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Konfigurasi SMTP (Gunakan akun email pengirim, misalnya Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Email pengirim
        pass: process.env.EMAIL_PASS, // Password aplikasi (App Password)
      },
    });

    // Kirim email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // Email tujuan
      subject: "New Contact Form Submission",
      text: message,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error); // Log error agar bisa dianalisis

    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
