# Email Setup Instructions

## Gmail SMTP Configuration

To enable the contact form to send emails via Gmail SMTP, follow these steps:

### 1. Install Required Package

First, install nodemailer:
```bash
npm install nodemailer @types/nodemailer
```

If you encounter permission issues, try:
```bash
npm install nodemailer @types/nodemailer --no-save
```

### 2. Set Up Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Scroll down to **App passwords**
4. Select **Mail** as the app and **Other (Custom name)** as the device
5. Enter "Metricmind Concepts" as the name
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### 3. Create Environment Variables

Create a `.env.local` file in the root of your project:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

**Important Notes:**
- Replace `your-email@gmail.com` with the Gmail address you want to send emails from
- Replace `your-16-character-app-password` with the 16-character app password (remove spaces)
- Never commit `.env.local` to version control (it's already in `.gitignore`)
- The emails will be sent to: `vickyman935@gmail.com`

### 4. Restart Development Server

After creating `.env.local`, restart your Next.js development server:
```bash
npm run dev
```

### Testing

1. Go to the contact page: `/contact`
2. Fill out the form with test data
3. Submit the form
4. Check `vickyman935@gmail.com` for the email

### Troubleshooting

- **"Email service not configured"**: Make sure `.env.local` exists and contains both `GMAIL_USER` and `GMAIL_APP_PASSWORD`
- **"Invalid login"**: Double-check your app password (it should be 16 characters, no spaces)
- **"Connection timeout"**: Check your internet connection and firewall settings
- **"Rate limit exceeded"**: Gmail has rate limits; wait a few minutes before trying again


