const express = require("express");
const sequelize = require("./config/db");
const profileRoutes = require("./routes/profile");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/profile", profileRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
