require('dotenv').config()
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get('/heading',(req,res)=>{
res.send('<h1>heading elments</h1>')
})
app.listen(process.env.PORT, () => {
  console.log("app is listening");
});
