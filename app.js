const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const userRouter = require("./routes/user");
const wikiRouter = require("./routes/wiki");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use("/wiki", wikiRouter);
// app.use("/user", userRouter);

app.get("/", (req, res, next) => {
  res.send(layout(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;

async function init() {
  await db.sync({ force: true });
  console.log("All models were synchronized successfully.");
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();
