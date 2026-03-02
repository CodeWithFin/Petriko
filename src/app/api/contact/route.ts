import { NextRequest, NextResponse } from 'next/server'

const TILIL_API_KEY = process.env.TILIL_API_KEY
const TILIL_SHORTCODE = process.env.TILIL_SHORTCODE || 'PETRIKO'
const SMS_ENDPOINT = process.env.SMS_ENDPOINT || 'https://api.tililtech.com/sms/v3/sendsms'
const OWNER_PHONE = process.env.OWNER_PHONE || '254726452055'

async function sendSMS(mobile: string, message: string) {
  // Normalize phone number to international format (254XXXXXXXXX)
  let normalized = mobile.replace(/\s+/g, '').replace(/[^0-9+]/g, '')
  if (normalized.startsWith('+')) normalized = normalized.slice(1)
  if (normalized.startsWith('07') || normalized.startsWith('01')) {
    normalized = '254' + normalized.slice(1)
  }
  if (!normalized.startsWith('254')) {
    normalized = '254' + normalized
  }

  const payload = {
    api_key: TILIL_API_KEY,
    mobile: normalized,
    message,
    sender_id: TILIL_SHORTCODE,
  }

  const res = await fetch(SMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json().catch(() => ({}))
  console.log(`SMS to ${normalized}:`, data)
  return data
}

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

    if (!TILIL_API_KEY) {
      console.error('TILIL_API_KEY is not configured')
      return NextResponse.json(
        { success: false, message: 'SMS service not configured.' },
        { status: 500 }
      )
    }

    const results: { owner?: unknown; client?: unknown } = {}

    // SMS to owner with client details
    const ownerMessage =
      `New enquiry from Petriko website:\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || 'Not provided'}\n` +
      `Message: ${message}`

    results.owner = await sendSMS(OWNER_PHONE, ownerMessage)

    // SMS to client (only if they provided a phone number)
    if (phone && phone.trim()) {
      const clientMessage =
        `Hi ${name}, thank you for reaching out to Petriko Interior Design. ` +
        `We have received your message and will contact you within 24 hours. ` +
        `For urgent enquiries call: 0726 452055.`

      results.client = await sendSMS(phone, clientMessage)
    }

    return NextResponse.json({ success: true, results })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
