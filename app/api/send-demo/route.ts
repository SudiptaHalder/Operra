import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  console.log('🚀 API route called')
  
  try {
    // Parse request body
    let body
    try {
      body = await request.json()
      console.log('📦 Request body:', body)
    } catch (e) {
      console.error('❌ Failed to parse request body:', e)
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const { name, businessName, businessType, teamSize, productInterest, email, phone, message } = body

    // Validate required fields
    const missingFields = []
    if (!name) missingFields.push('name')
    if (!businessName) missingFields.push('businessName')
    if (!email) missingFields.push('email')
    if (!phone) missingFields.push('phone')

    if (missingFields.length > 0) {
      console.log('❌ Missing fields:', missingFields)
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          missing: missingFields 
        },
        { status: 400 }
      )
    }

    console.log('✅ Validation passed, sending email...')

    // SANDBOX MODE: Send to your own email only
    const { data, error } = await resend.emails.send({
      from: 'Trezbo <onboarding@resend.dev>',
      to: ['sudiptah2090@gmail.com'], // Your email only (must match your Resend account email)
      subject: `New Demo Request: ${businessName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <title>New Demo Request</title>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #982598; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
            .field { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }
            .label { font-weight: bold; color: #982598; display: inline-block; width: 120px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Demo Request</h2>
            </div>
            <div class="content">
              <div class="field"><span class="label">Name:</span> ${name}</div>
              <div class="field"><span class="label">Business:</span> ${businessName}</div>
              <div class="field"><span class="label">Type:</span> ${businessType || 'Not specified'}</div>
              <div class="field"><span class="label">Team Size:</span> ${teamSize || 'Not specified'}</div>
              <div class="field"><span class="label">Product:</span> ${productInterest || 'Not specified'}</div>
              <div class="field"><span class="label">Email:</span> ${email}</div>
              <div class="field"><span class="label">Phone:</span> ${phone}</div>
              ${message ? `<div class="field"><span class="label">Message:</span> ${message}</div>` : ''}
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('❌ Resend error:', error)
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: error.message 
        },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully:', data)

    // Return success to the frontend
    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request sent successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Unexpected server error:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}