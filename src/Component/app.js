const express = require("express");
const app = express();
const routes = require("./routes");
const models = require("./models");
const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
