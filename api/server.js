const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  config = require("./DB");

// Warnings：Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify
// 原因findOneAndUpdate内部会使用findAndModify驱动，即将被废弃。
// 解决使用mongoose时加上mongoose.set("useUnifiedTopology", true);

mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
const businessRoute = require("./routes/business.route");

const questionRoute = require("./routes/question.route");
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/business", businessRoute);
app.use("/question", questionRoute);
app.use("/", express.static("public"));
const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
  console.log("Listening on port " + port);
});
