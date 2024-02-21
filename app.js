const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=australia`;

    let response = await fetch(url);
    let unis = await response.json(); 
    // console.table(unis[0].name);
    // let firstuni = unis[0];

    res.render("index", {uni_data: unis});
});

app.get("/denmark", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=denmark`;

    let response = await fetch(url);
    let unis = await response.json(); 

    res.render("index", {uni_data: unis});
});

app.get("/france", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=france`;

    let response = await fetch(url);
    let unis = await response.json(); 

    res.render("index", {uni_data: unis});
});

app.get("/usa", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=united+states`;

    let response = await fetch(url);
    let unis = await response.json(); 

    res.render("index", {uni_data: unis});
});

app.listen(3000, () => {
    console.log("Server is listening on port localhost:3000");
});