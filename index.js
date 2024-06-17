const express = require("express");
const app = express();
const port = 5000

app.get("/", (req, res) => {
    res.send("BloodBay server is running");
  });

app.listen(port, ()=>{
    console.log(`BloodBay server is running on port: ${port}`)
})