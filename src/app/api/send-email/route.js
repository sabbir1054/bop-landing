import nodemailer from "nodemailer";
const hostName = process.env.NEXT_HOST_NAME;
const port = process.env.NEXT_EMAIL_PORT;
const user = process.env.NEXT_EMAIL_USER;
const pass = process.env.NEXT_EMAIL_PASS;
const toEmail = process.env.NEXT_EMAIL_TO_ADD;
const emailConfig = {
  host: hostName,
  port: port,
  secure: true,
  auth: {
    user: user,
    pass: pass,
  },
};

export async function POST(req) {
  const formData = await req.json();

  const transporter = nodemailer.createTransport(emailConfig);

  const mailOptions = {
    from: user,
    to: toEmail,
    subject: formData.subject,
    html: `
      <p>Email: ${formData.email}</p>
      <p>Message:</p>
      <pre>${formData.message}</pre>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
