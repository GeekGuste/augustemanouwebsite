import express, { Request, Response } from "express";
import { sendMail } from "../services/mailService";
import ejs from "ejs";
import fs from "fs";

import bodyParser from "body-parser";

// create application/json parser
const jsonParser = bodyParser.json();

export const indexRoutes = express.Router();

indexRoutes.post(
  "/contact-auguste",
  jsonParser,
  (req: Request, res: Response): void => {
    // console.log(req.body.subject);
    const { subject, name, email, message } = req.body;
    // Read the EJS template file
    const template = fs.readFileSync(
      "src/views/emails/contact-auguste.ejs",
      "utf8"
    );

    // Render the template with EJS
    const renderedTemplate = ejs.render(template, {
      subject,
      name,
      email,
      message,
    });

    res.send(
      sendMail("Contact depuis ton site - " + subject, renderedTemplate, email)
    );
  }
);
