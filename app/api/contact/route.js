import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { name, email, service, message } = body;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: 'Missing required fields' }),
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `Message From Portfolio Site: ${service || 'General Inquiry'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service: ${service}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
    });
  }
}
