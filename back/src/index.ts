import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { indexRoutes } from "../routes/indexRoutes";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3030;

app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use("/", indexRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("You are on My contact Management Page");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
