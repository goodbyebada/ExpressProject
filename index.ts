import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";

const app: Express = express();
const port = 5000;

// Request 인터페이스 확장
interface CustomRequest extends Request {
  requestTime?: number;
}

var requestTime = function (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);
// 어떤 요청이든 된다.

app.get("/", (req: CustomRequest, res: Response) => {
  //   res.send("Typescript + Node.js + Express Server");

  //   const filePath = path.join(__dirname, "home.html");
  //   res.sendFile(filePath);

  var responseText = "Hello World!";
  responseText += "Requested at: " + req.requestTime + "";
  res.send(responseText);
});

app.get(
  "/user/:id",
  function (req, res, next) {
    console.log("ID:", req.params.id);
    next();
  },
  function (req, res, next) {
    console.log(req.body);
    res.send("User Info");
  }
);

app.get("/router", (req: Request, res: Response) => {
  res.send("isRouter");
});
app.get("/router/:id", (req: CustomRequest, res: Response) => {
  //   const q = req.params.id;
  //   res.send({ data: { id: q } });

  var responseText = "Hello World!";
  responseText += "Requested at: " + req.requestTime + "";
  res.send(responseText);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost>:${port}`);
});

let respond: string;
app.get(
  "/example/a",
  function (req, res, next) {
    respond = "the response will be sent by the next function ...";
    res.send("end");
  },
  function A(req, res) {
    console.log("실행되지 않는다.");
    res.send(respond + "\nHello from a!");
  }
);
