const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(compression());


app.use(require("./routes/html-routes.js"));
require("./routes/api-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});


app.listen(PORT, ()=> {
    console.log(
        `Listening on port ${PORT}`
)
})