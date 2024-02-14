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

  transporter.sendMail(
    mailOptions,
    function (error: Error | null, info: any): void {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};
