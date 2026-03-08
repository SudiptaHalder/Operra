import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    console.log('📧 New subscriber:', email)

    // Send welcome email to subscriber
    await resend.emails.send({
      from: 'Operra <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to Operra Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #982598; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Operra!</h1>
            </div>
            <div class="content">
              <p>Thanks for subscribing to our newsletter!</p>
              <p>You'll now receive weekly insights, tips, and resources to help you run your small business better.</p>
              <p>No spam, unsubscribe anytime.</p>
              <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/blog" class="button">Explore Blog</a>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // Send notification to you
    await resend.emails.send({
      from: 'Operra <onboarding@resend.dev>',
      to: [process.env.SALES_EMAIL || 'sudiptah2090@gmail.com'],
      subject: 'New Newsletter Subscriber!',
      html: `
        <h2>New Subscriber!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}