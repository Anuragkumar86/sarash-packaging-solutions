// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST(req: Request) {

    console.log("EMAIL: ", process.env.NEXT_PUBLIC_SMTP_USER)
    console.log("secret ", process.env.NEXT_PUBLIC_SMTP_PASS)
    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    // const phone = formData.get('phone')
    const message = formData.get('message')

    // create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });


    try {
        // send the email
        await transporter.sendMail({
            from: `"Sarash Website Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER, // where you want to receive messages
            subject: `New Contact Form Submission from ${name}`,
            text: `
            Name: ${name}
            Email: ${email}
            

            Message: ${message} `
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
