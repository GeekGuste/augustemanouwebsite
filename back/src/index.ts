import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { indexRoutes } from "../routes/indexRoutes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use("/", indexRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
