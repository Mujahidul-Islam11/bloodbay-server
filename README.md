<h2>How to create a server</h2>
<h4>We first need three things to create a server</h4>
<ul>
<li>Require express: <br/> const express = require("express")</li>
<li>Call express inside app variable:<br/> const app = express()</li>
<li>Create a port to run the server:<br/> const port = 5000</li>
</ul>

<h4>Listen the port and get your first root api</h4>
<ul>
<li>app.get("/",(req, res)=>{
    res.send("Server is running")
})</li>
<li>
app.listen(port, ()=>{
    console.log(`bloodbay server is running on port: ${port}`)
})
</li>
</ul>


``` 
const express = require("express");
const app = express();
const port = 5000

app.get("/", (req, res) => {
    res.send("bloodbay server is running");
  });

app.listen(port, ()=>{
    console.log('bloodbay server is running on port: ${port}')
})
