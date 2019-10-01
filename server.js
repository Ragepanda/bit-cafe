const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const db = require("./models");
const path = require("path");

require('dotenv').config();

// Define middleware here
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("This is the node value "+ process.env.NODE_ENV);
// Serve up static assets (usually on heroku)



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '/var/www/bitcoinsama.com/client/build/')));
}

app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
