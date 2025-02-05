"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};
app.use(requestTime);
// 어떤 요청이든 된다.
app.get("/", (req, res) => {
    //   res.send("Typescript + Node.js + Express Server");
    //   const filePath = path.join(__dirname, "home.html");
    //   res.sendFile(filePath);
    var responseText = "Hello World!";
    responseText += "Requested at: " + req.requestTime + "";
    res.send(responseText);
});
app.get("/user/:id", function (req, res, next) {
    console.log("ID:", req.params.id);
    next();
}, function (req, res, next) {
    console.log(req.body);
    res.send("User Info");
});
app.get("/router", (req, res) => {
    res.send("isRouter");
});
app.get("/router/:id", (req, res) => {
    //   const q = req.params.id;
    //   res.send({ data: { id: q } });
    var responseText = "Hello World!";
    responseText += "Requested at: " + req.requestTime + "";
    res.send(responseText);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at <http://localhost>:${port}`);
});
let respond;
app.get("/example/a", function (req, res, next) {
    respond = "the response will be sent by the next function ...";
    res.send("end");
}, function A(req, res) {
    console.log("실행되지 않는다.");
    res.send(respond + "\nHello from a!");
});
