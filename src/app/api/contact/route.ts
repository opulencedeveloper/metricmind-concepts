import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Where contact-form messages are delivered. Override with CONTACT_TO in the environment if needed.
const CONTACT_TO = process.env.CONTACT_TO || 'info@metricmindconcepts.com';

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

/** Escape user input before placing it inside HTML, so it renders as plain text. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Strip line breaks so input can't add extra headers when used in the subject line. */
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    const name = typeof body?.name === 'string' ? singleLine(body.name) : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    if (name.length > MAX_NAME || email.length > MAX_EMAIL || message.length > MAX_MESSAGE) {
      return NextResponse.json({ error: 'One or more fields are too long' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
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

    // Gmail SMTP with normal certificate verification.
    // Try port 465 (implicit TLS) first; if the network blocks it, fall back to 587 (STARTTLS).
    const auth = { user: gmailUser, pass: gmailPassword }; // Use an App Password, not the regular password
    const timeouts = { connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 20_000 };
    const transports = [
      nodemailer.createTransport({ host: 'smtp.gmail.com', port: 465, secure: true, auth, ...timeouts }),
      nodemailer.createTransport({ host: 'smtp.gmail.com', port: 587, secure: false, requireTLS: true, auth, ...timeouts }),
    ];

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const mailOptions = {
      from: `"Metricmind Concepts Website" <${gmailUser}>`,
      to: CONTACT_TO,
      replyTo: email, // Reply goes straight to the visitor
      subject: `New contact form message from ${name}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f3efe4;">
          <div style="background-color: #121212; color: #ffffff; padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 10px 0 0 0; color: #b6f23a;">Metricmind Concepts Website</p>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 12px 12px;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #121212; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">From</h3>
              <p style="margin: 5px 0; font-size: 16px; color: #333;"><strong>Name:</strong> ${safeName}</p>
              <p style="margin: 5px 0; font-size: 16px; color: #333;"><strong>Email:</strong> ${safeEmail}</p>
            </div>
            <div style="margin-bottom: 20px; padding-top: 20px; border-top: 1px solid #eee;">
              <h3 style="color: #121212; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
              <p style="margin: 0; font-size: 15px; color: #555; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #999;">Sent from the contact form on metricmindconcepts.com.</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #999;">Reply to this email to respond to ${safeName}.</p>
            </div>
          </div>
        </div>
      `,
    };

    let lastError: unknown;
    let sent = false;
    for (const transport of transports) {
      try {
        await transport.sendMail(mailOptions);
        sent = true;
        break;
      } catch (err) {
        lastError = err;
        const code = (err as { code?: string }).code;
        // Only try the next port for connection problems; auth or message errors would fail there too
        if (code !== 'ESOCKET' && code !== 'ETIMEDOUT' && code !== 'ECONNECTION') break;
        console.warn(`SMTP connection failed (${code}), trying next port...`);
      }
    }
    if (!sent) throw lastError;

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}
