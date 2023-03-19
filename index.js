const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(cors())

app.set("view engine","ejs");

let pLanguages=[];

app.get("/", (req, res) => {
  res.render("index",{pLanguageName:pLanguages});
});

app.get("/test", (req, res) => {
  res.status(200).json({
    message:"hi"
  })
});

app.post("/", (req, res) => {
  const pLanguage=req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect(("/"));
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server is running http://localhost:5000');
});