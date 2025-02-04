import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript + Node.js + Express Server");
});

app.get("/router", (req: Request, res: Response) => {
  res.send("isRouter");
});
app.get("/router/:id", (req: Request, res: Response) => {
  res.send("isRouter with ID");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost>:${port}`);
});
