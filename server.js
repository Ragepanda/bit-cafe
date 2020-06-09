const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const db = require("./models");
const path = require("path");
const cors = require("cors");

app.use(cors({
  origin:["http://localhost:3000","http://localhost:45678", "http://bitcoinsama.com"],
  methods:['GET','POST', 'PUT', 'DELETE'],
  credentials: true
}));

require('dotenv').config();

// Define middleware here
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("This is the node value "+ process.env.NODE_ENV);
// Serve up static assets (usually on heroku)



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
