const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("Service Running on PORT 3000");
});

app.get("/url", (req,res,next)=>{
    res.json(["Scarlett","Ellen","Jake","John"]);
});