import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Check if environment variables are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Email configuration missing: GMAIL_USER or GMAIL_APP_PASSWORD not set')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service not configured. Please contact us directly at finley.mwachia12@gmail.com or call 0726 452055.',
          errorType: 'CONFIG_MISSING'
        },
        { status: 500 }
      )
    }

    // Check if Gmail app password is still the placeholder
    if (process.env.GMAIL_APP_PASSWORD === 'your_gmail_app_password_here') {
      console.error('Gmail app password is still placeholder')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service not fully configured. Please contact us directly at finley.mwachia12@gmail.com or call 0726 452055.',
          errorType: 'CONFIG_PLACEHOLDER'
        },
        { status: 500 }
      )
    }

    // Handle both FormData and JSON content types
    const contentType = request.headers.get('content-type') || ''
    let name: string
    let email: string
    let phone: string
    let location: string
    let projectType: string
    let message: string
    let budget: string
    let files: File[] = []

    if (contentType.includes('multipart/form-data')) {
      // Handle FormData (with file uploads)
      const formData = await request.formData()
      name = formData.get('name') as string
      email = formData.get('email') as string
      phone = formData.get('phone') as string
      location = formData.get('location') as string
      projectType = formData.get('projectType') as string
      message = formData.get('message') as string
      budget = formData.get('budget') as string
      files = formData.getAll('files') as File[]
    } else {
      // Handle JSON (without file uploads)
      const body = await request.json()
      name = body.name
      email = body.email
      phone = body.phone
      location = body.location
      projectType = body.projectType
      message = body.message
      budget = body.budget
    }
    
    // Validate required fields
    if (!name || !email || !phone || !location || !projectType || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please fill in all required fields.',
          errorType: 'VALIDATION_ERROR'
        },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    // Prepare email content
    const emailHtml = `
      <h2>New Quote Request from Website</h2>
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h3>Client Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        
        <h3>Project Details:</h3>
        <p><strong>Service Type:</strong> ${projectType}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Description:</strong></p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        
        <h3>Contact Information:</h3>
        <p>Reply to this email or call ${phone} to follow up.</p>
        
        ${files.length > 0 ? `<p><strong>Note:</strong> ${files.length} reference image(s) attached.</p>` : ''}
      </div>
    `

    // Prepare attachments
    const attachments = await Promise.all(
      files.map(async (file, index) => {
        const buffer = Buffer.from(await file.arrayBuffer())
        return {
          filename: file.name || `image-${index + 1}.jpg`,
          content: buffer,
        }
      })
    )

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to the same email account for testing
      subject: `New Quote Request - ${projectType} Project in ${location}`,
      html: emailHtml,
      attachments,
      replyTo: email
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request sent successfully' 
    })

  } catch (error) {
    console.error('Error sending quote request:', error)
    
    // Check for specific email-related errors
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Email authentication failed. Please contact us directly at finley.mwachia12@gmail.com or call 0726 452055.',
            errorType: 'AUTH_ERROR'
          },
          { status: 500 }
        )
      }
      
      if (error.message.includes('getaddrinfo ENOTFOUND')) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Network connection error. Please check your internet connection and try again.',
            errorType: 'NETWORK_ERROR'
          },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Unable to send quote request at the moment. Please contact us directly at finley.mwachia12@gmail.com or call 0726 452055.',
        errorType: 'UNKNOWN_ERROR'
      },
      { status: 500 }
    )
  }
}
