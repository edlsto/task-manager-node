const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload a Word document"));
    }

    cb(undefined, true);
    // cb(new Error("File must be a PDF"))
    // cb(undefined, true)
  },
});

app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
});

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
