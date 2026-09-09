import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { ADMIN_NOTIFICATION_EMAIL } from '@/lib/constants'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name = '',
      email = '',
      phone = '',
      city = '',
      serviceInterest = '',
      duration = '',
      type = '',
      message = '',
      sourcePage = 'Website Form'
    } = body

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { success: false, error: 'Name and at least one contact channel (Email or Phone) are required.' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    const targetEmail = process.env.NOTIFICATION_EMAIL || ADMIN_NOTIFICATION_EMAIL

    // 1. Persistent Local Lead Log Backup (never lose a lead)
    try {
      const logDir = path.join(process.cwd(), 'data')
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true })
      }
      const logFilePath = path.join(logDir, 'leads.json')
      let existingLeads: any[] = []
      if (fs.existsSync(logFilePath)) {
        const rawData = fs.readFileSync(logFilePath, 'utf8')
        existingLeads = JSON.parse(rawData || '[]')
      }

      const newLead = {
        id: `lead_${Date.now()}`,
        timestamp,
        sourcePage,
        name,
        email,
        phone,
        city,
        serviceInterest,
        duration,
        type,
        message,
        targetEmail
      }

      existingLeads.unshift(newLead)
      fs.writeFileSync(logFilePath, JSON.stringify(existingLeads, null, 2), 'utf8')
    } catch (fsErr) {
      console.error('Error logging lead locally:', fsErr)
    }

    // 2. Email Dispatcher (Nodemailer SMTP)
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = Number(process.env.SMTP_PORT) || 465
    const smtpUser = process.env.SMTP_USER || targetEmail
    const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '')

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background: #1B5E43; padding: 24px 32px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">🚨 NEW AASARA LEAD RECEIVED</h2>
          <p style="color: #D4A24C; margin: 6px 0 0 0; font-size: 12px; font-weight: 600; text-transform: uppercase;">Source: ${sourcePage}</p>
        </div>
        
        <div style="padding: 32px; background-color: #f8fafc;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0F172A; width: 140px;">Full Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1E293B; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0F172A;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1B5E43; font-weight: 700;">
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #1B5E43; text-decoration: none;">${phone} (Click to WhatsApp)</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0F172A;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2563EB;">${email}</td>
            </tr>
            ${city ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0F172A;">Target Location:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${city}</td>
            </tr>` : ''}
            ${serviceInterest ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0F172A;">Service Focus:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #D4A24C; font-weight: 700;">${serviceInterest}</td>
            </tr>` : ''}
            ${duration ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0F172A;">Stay Duration:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${duration}</td>
            </tr>` : ''}
            ${type ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0F172A;">Property Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${type}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding: 18px; background: #ffffff; border-radius: 12px; border: 1px solid #cbd5e1;">
            <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; color: #64748B; uppercase; letter-spacing: 0.5px;">FAMILY REQUIREMENTS / MESSAGE:</p>
            <p style="margin: 0; font-size: 14px; color: #0F172A; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional notes provided.'}</p>
          </div>
        </div>

        <div style="background: #0F172A; padding: 16px; text-align: center; color: #94A3B8; font-size: 11px;">
          Log Time: ${timestamp} IST | Forwarded to <strong>${targetEmail}</strong>
        </div>
      </div>
    `

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      await transporter.sendMail({
        from: `"Aasara Web Leads" <${smtpUser}>`,
        to: targetEmail,
        subject: `🚨 New Lead: ${name} (${city || 'Consultation Request'})`,
        html: htmlContent,
      })
    } else {
      console.log('----------------------------------------------------')
      console.log(`[LEAD RECEIVED -> Forwarding target: ${targetEmail}]`)
      console.log(`Name: ${name} | Phone: ${phone} | Email: ${email}`)
      console.log(`City: ${city} | Service: ${serviceInterest} | Message: ${message}`)
      console.log('----------------------------------------------------')
    }

    return NextResponse.json({
      success: true,
      message: `Lead received and logged for ${targetEmail}`
    })
  } catch (error: any) {
    console.error('API Contact Error:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
