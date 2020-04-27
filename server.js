const express = require("express");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));


app.listen(PORT, ()=> {
    console.log(
        `Listening on port ${PORT}`
)
})