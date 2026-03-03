/**
 * Shared email utility using Resend.
 * Reads RESEND_API_KEY from env.
 */
import { Resend } from 'resend'

const getResend = () => {
    const key = process.env.RESEND_API_KEY
    if (!key) throw new Error('RESEND_API_KEY is not configured')
    return new Resend(key)
}

export interface EmailOptions {
    to: string | string[]
    subject: string
    html: string
    replyTo?: string
}

/**
 * Send an email via Resend.
 * Uses onboarding@resend.dev as the from address (works without a verified domain).
 * Replace with a verified domain address once available.
 */
export async function sendEmail(opts: EmailOptions) {
    const resend = getResend()

    const { data, error } = await resend.emails.send({
        from: 'Petriko Interior Design <onboarding@resend.dev>',
        to: Array.isArray(opts.to) ? opts.to : [opts.to],
        subject: opts.subject,
        html: opts.html,
        ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
    })

    if (error) {
        console.error('[Email] Resend error:', error)
        throw new Error(error.message)
    }

    console.log('[Email] Sent:', data?.id)
    return data
}
