import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get Gmail SMTP credentials from environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      console.error('Gmail credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter with explicit Gmail SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports (587 uses STARTTLS)
      auth: {
        user: gmailUser,
        pass: gmailPassword, // Use App Password, not regular password
      },
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false,
      },
    });

    // Email content
    const mailOptions = {
      from: gmailUser,
      to: 'vickyman935@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Metricmind Concepts Website</p>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin-bottom: 10px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">From:</h3>
              <p style="margin: 5px 0; font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a></p>
            </div>
            <div style="margin-bottom: 20px; padding-top: 20px; border-top: 1px solid #eee;">
              <h3 style="color: #1e40af; margin-bottom: 10px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Message:</h3>
              <p style="margin: 0; font-size: 15px; color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #999;">This email was sent from the Metricmind Concepts contact form.</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #999;">Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email, // Allow direct reply to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! We will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

