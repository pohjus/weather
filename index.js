const express = require("express");
const app = express();
var cors = require("cors");

const axios = require("axios");

require("dotenv").config();

app.use(cors());

// https://www.youtube.com/watch?v=ZGymN8aFsv4

const PORT = process.env.PORT || 8080;

app.get("/q=:city([a-z]*)", async (req, res) => {
  let response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.APP_ID}`
  );
  res.send(response.data);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}}`);
});
