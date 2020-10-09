const express = require("express");
const app = express();
app.get('/id',(req,res)=>{
    res.send({"id":"it340-tanzia_brawlers"});
});
app.listen(3000, () => {
    console.log("Server started !");
});