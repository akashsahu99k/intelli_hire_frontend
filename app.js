const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var compiler = require('compilex');
// app.use(express.static(path.join(__dirname, "src/app")));
app.use(bodyParser.json())

app.get("/", async (req,res)=>{
   
})

app.listen(8000,()=>{
    console.log("server start at 8000")
})
    