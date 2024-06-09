import { createTransport, Transporter } from "nodemailer";

const transporter: Transporter = createTransport({
  host: "localhost",
  port: 25,
});

export const sendMail = (subject: string, html: string, reply?: string) => {
  const mailOptions = {
    from: "noreply@contact.tincom.biz",
    to: "manouauguste7@gmail.com",
    subject: subject,
    html: html,
    replyTo: reply,
  };

  var result: any;

  try {
    result = transporter.sendMail(mailOptions);
  } catch (error: any) {
    result = { ...error };
  }
  console.log(result);
  return result as string;
};
