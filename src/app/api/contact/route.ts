import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/sms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const OWNER_EMAIL = process.env.OWNER_EMAIL || 'petricolimited@gmail.com'

    // Critical: notify owner
    await sendEmail({
      to: OWNER_EMAIL,
      subject: `New Enquiry from ${name} – Petriko Website`,
      replyTo: email,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#111;">
          <h2 style="font-size:22px;margin-bottom:24px;border-bottom:1px solid #eee;padding-bottom:16px;">
            New Website Enquiry
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;width:120px;">Name</td><td style="padding:8px 0;font-weight:500;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#b19777;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;">Phone</td><td style="padding:8px 0;">${phone || 'Not provided'}</td></tr>
          </table>
          <div style="margin-top:24px;">
            <p style="color:#888;margin-bottom:8px;">Message</p>
            <p style="background:#f9f9f9;padding:16px;border-radius:4px;line-height:1.6;">${message}</p>
          </div>
        </div>
      `,
    })

    // Best-effort: confirmation to client (may fail without a verified domain)
    try {
      await sendEmail({
        to: email,
        subject: 'We received your message – Petriko Interior Design',
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#111;">
            <h2 style="font-size:22px;margin-bottom:8px;">Thank you, ${name}.</h2>
            <p style="color:#555;line-height:1.7;margin-top:0;">
              We have received your message and one of our designers will get back to you within 24 hours.
            </p>
            <p style="color:#555;line-height:1.7;">
              For urgent enquiries, you can reach us directly at
              <a href="tel:+254726452055" style="color:#b19777;">0726 452055</a>.
            </p>
            <p style="margin-top:32px;color:#b19777;font-size:13px;letter-spacing:0.05em;">PETRIKO INTERIOR DESIGN</p>
          </div>
        `,
      })
    } catch (clientErr) {
      console.warn('[contact] Client confirmation email skipped:', clientErr)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
