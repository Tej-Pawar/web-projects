const path = require('path');
const express = require("express");
const hbs = require("hbs")
const app = express();
const port = process.env.PORT || 8000;
app.set("view engine", "hbs");
const templetepath = path.join(__dirname, "../templete/views");
app.set("views", templetepath);
const partialpath = path.join(__dirname, "../templete/partial");
hbs.registerPartials(partialpath);

const staticpath = path.join(__dirname, "../public")
app.use(express.static(staticpath))
app.get('/', (req, resp) => {
    resp.render("index");
})
app.get('/about', (req, resp) => {
    resp.render("about");
})
app.get('/whether', (req, resp) => {
    resp.render("whether");
})
app.get('*', (req, resp) => {
    resp.render("404");
})
app.listen(port, () => {
    console.log(`port is listen on ${port}`);
})