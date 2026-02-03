import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, subject, message } = req.body as ContactFormData

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Formato de email inválido' })
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return res.status(500).json({ error: 'Configuração de email não encontrada' })
    }

    // Initialize Resend inside the handler to ensure env var is available
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email using Resend
    // Note: With free tier, you can only send to the email you signed up with
    // unless you verify a domain
    const { data, error } = await resend.emails.send({
      from: 'J3Designer Portfolio <onboarding@resend.dev>',
      to: [process.env.RESEND_TO_EMAIL || 'julio.jco@hotmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a8c66c; border-bottom: 2px solid #a8c66c; padding-bottom: 10px;">
            Nova mensagem do Portfolio J3Designer
          </h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong>Assunto:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Mensagem:</h3>
            <p style="background: #fff; padding: 15px; border-left: 4px solid #a8c66c; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          
          <p style="color: #888; font-size: 12px; text-align: center;">
            Esta mensagem foi enviada através do formulário de contato do portfolio J3Designer.
          </p>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2))
      return res.status(500).json({ 
        error: 'Falha ao enviar email. Tente novamente.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    }

    return res.status(200).json({ success: true, messageId: data?.id })
  } catch (err) {
    const error = err as Error
    console.error('Server error:', error.message, error.stack)
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}
