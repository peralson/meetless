import nodemailer, { TransportOptions } from "nodemailer";

type Payload = {
  recipient: string;
  subject: string;
  html: string;
};

export const handleEmailFire = async (data: Payload) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE || "SendGrid",
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  } as TransportOptions);

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: data.recipient,
    recipient: data.recipient,
    subject: data.subject,
    html: data.html,
  };

  return await transporter.sendMail(mailOptions);
};
