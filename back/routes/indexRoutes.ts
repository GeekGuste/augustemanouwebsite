import express, { Request, Response } from "express";
import { sendMail } from "../services/mailService";
import ejs from "ejs";
import fs from "fs";

export const indexRoutes = express.Router();

indexRoutes.post("contact-auguste", (req: Request, res: Response): void => {
  const { subject, name, email, message } = req.body;
  // Read the EJS template file
  const template = fs.readFileSync(
    "../views/emails/contact-auguste.ejs",
    "utf8"
  );

  // Render the template with EJS
  const renderedTemplate = ejs.render(template, {
    subject,
    name,
    email,
    message,
  });
  sendMail("Contact depuis ton site - " + subject, renderedTemplate, email);
});
