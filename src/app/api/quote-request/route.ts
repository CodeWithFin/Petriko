import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/sms'

export async function POST(request: NextRequest) {
  try {
    const OWNER_EMAIL = process.env.OWNER_EMAIL || 'petricolimited@gmail.com'

    // Accept both JSON and multipart/form-data
    const contentType = request.headers.get('content-type') || ''

    let name: string
    let email: string
    let phone: string
    let location: string
    let projectType: string
    let message: string
    let budget: string

    if (contentType.includes('multipart/form-data')) {
      const fd = await request.formData()
      name = fd.get('name') as string
      email = fd.get('email') as string
      phone = fd.get('phone') as string
      location = fd.get('location') as string
      projectType = fd.get('projectType') as string
      message = fd.get('message') as string
      budget = fd.get('budget') as string
    } else {
      const body = await request.json()
      name = body.name
      email = body.email
      phone = body.phone
      location = body.location
      projectType = body.projectType
      message = body.message
      budget = body.budget
    }

    if (!name || !email || !phone || !location || !projectType || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Detailed notification to owner
    await sendEmail({
      to: OWNER_EMAIL,
      subject: `New Quote Request: ${projectType} – ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#111;">
          <h2 style="font-size:22px;margin-bottom:24px;border-bottom:1px solid #eee;padding-bottom:16px;">
            New Quote Request – Petriko
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;width:140px;">Name</td><td style="padding:8px 0;font-weight:500;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#b19777;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;">Phone</td><td style="padding:8px 0;"><a href="tel:${phone}" style="color:#b19777;">${phone}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;">Location</td><td style="padding:8px 0;">${location}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Service</td><td style="padding:8px 0;">${projectType}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Budget</td><td style="padding:8px 0;">${budget || 'Not specified'}</td></tr>
          </table>
          <div style="margin-top:24px;">
            <p style="color:#888;margin-bottom:8px;">Project Details</p>
            <p style="background:#f9f9f9;padding:16px;border-radius:4px;line-height:1.6;">${message}</p>
          </div>
        </div>
      `,
    })

    // Best-effort: confirmation to client (may fail without a verified domain)
    try {
      await sendEmail({
        to: email,
        subject: 'Your Quote Request – Petriko Interior Design',
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#111;">
            <h2 style="font-size:22px;margin-bottom:8px;">Thank you, ${name}.</h2>
            <p style="color:#555;line-height:1.7;margin-top:0;">
              We have received your <strong>${projectType}</strong> project enquiry and will contact you within 24 hours
              to discuss further and arrange a site visit if needed.
            </p>
            <p style="color:#555;line-height:1.7;">
              For urgent enquiries, reach us at
              <a href="tel:+254726452055" style="color:#b19777;">0726 452055</a>.
            </p>
            <p style="margin-top:32px;color:#b19777;font-size:13px;letter-spacing:0.05em;">PETRIKO INTERIOR DESIGN</p>
          </div>
        `,
      })
    } catch (clientErr) {
      console.warn('[quote-request] Client confirmation email skipped:', clientErr)
    }


    return NextResponse.json({
      success: true,
      message: 'Quote request sent successfully',
    })
  } catch (error) {
    console.error('[quote-request] Error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send quote request. Please call 0726 452055 directly.',
      },
      { status: 500 }
    )
  }
}
