// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Sarash Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `📩 New Message from ${name}`,
      // plain text fallback
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      // 🔥 styled HTML version
      html: `
      <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:30px;">
        <div style="max-width:600px; margin:0 auto; background:white; border-radius:8px; overflow:hidden; box-shadow:0 4px 8px rgba(0,0,0,0.05)">
          <div style="background:linear-gradient(135deg,#1E40AF,#2563EB); padding:20px; text-align:center;">
            <h1 style="color:white; margin:0; font-size:22px;">New Contact Message</h1>
          </div>
          <div style="padding:30px;">
            <p style="font-size:16px; color:#333;">Hello, you have a new message from your website:</p>
            <table style="width:100%; font-size:16px; margin-top:20px;">
              <tr>
                <td style="font-weight:bold; padding:5px; width:120px;">Name:</td>
                <td style="padding:5px;">${name}</td>
              </tr>
              <tr style="background:#f3f4f6;">
                <td style="font-weight:bold; padding:5px;">Email:</td>
                <td style="padding:5px;">${email}</td>
              </tr>
            </table>
            <div style="margin-top:30px;">
              <h3 style="margin-bottom:10px; color:#1E40AF;">Message:</h3>
              <p style="padding:15px; background:#f3f4f6; border-radius:5px; white-space:pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background:#f3f4f6; text-align:center; padding:15px; font-size:12px; color:#666;">
            Sent from Sarash Website Contact Form
          </div>
        </div>
      </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
