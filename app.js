const express = require("express");
const morgan = require("morgan");
const app = express();
const apiRouter = require("./api");

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the TTP Backend Template!</h1>");
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
