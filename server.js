const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var _ = require("lodash");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  bodyParser.raw({
    limit: 1 * 1024 * 1024, // 1 MBytes
    type: "text/plain",
  })
);
app.use(
  bodyParser.raw({
    limit: 1 * 1024 * 1024, // 1 MBytes
    type: "application/octet-stream",
  })
);

// routes
app.get("/", (req, res) => {
  res.json({ message: "Listening API." });
});

// Get All Routes From Folder app/routes
var fs = require("fs");
var files = fs.readdirSync("./app/routes");
_.each(files, (row) => {
  require(`./app/routes/${row}`)(app);
});

// set port, listen for requests
const PORT = process.env.PORT || 9091;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
