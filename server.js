// const express = require("express");
// const bodyParser = require("body-parser");
// const mysqlConnection = require("./connection");

// const AddressesRoutes = require("./routes/addresses")

// var app = express();
// app.use(bodyParser.json());
// app.use("/addresses", AddressesRoutes);

// app.listen(3000);

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });  

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

require("./routes/address.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
