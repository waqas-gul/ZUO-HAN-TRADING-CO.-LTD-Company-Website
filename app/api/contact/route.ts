import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

// Create transporter - Configure with your SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email to company
    const companyEmailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This is an automated message from the Zuohan Trading website contact form.</small></p>
    `

    // Email to user
    const userEmailContent = `
      <h2>Thank You for Contacting Zuohan Trading</h2>
      <p>Hi ${name},</p>
      <p>We've received your inquiry and will get back to you as soon as possible, typically within 24 hours.</p>
      <h3>Your Message Details:</h3>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p>Best regards,<br><strong>Zuohan Trading Team</strong></p>
      <p style="margin-top: 20px; font-size: 12px; color: #888;">
        For inquiries, contact us at info@Zuohantrading.ae or +971 54 555 5555
      </p>
    `

    // Send email to company
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL || 'info@Zuohantrading.ae',
      subject: `New Contact Form: ${subject}`,
      html: companyEmailContent,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We Received Your Message - Zuohan Trading',
      html: userEmailContent,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
