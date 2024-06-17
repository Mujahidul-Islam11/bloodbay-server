const express = require("express");
const app = express();
const port = 5000

app.get("/", (req, res) => {
    res.send("bloodbay server is running");
  });

app.listen(port, ()=>{
    console.log(`bloodbay server is running on port: ${port}`)
})