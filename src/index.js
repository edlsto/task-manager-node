const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is in maintenance mode");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// const router = new express.Router();
// router.get("/test", (req, res) => {
//   res.send("This is from my other router");
// });

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
