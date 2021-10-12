let express = require('express');
let app = express();
let port = 3000;
//discuss routing on a basic level
//methodolgy for configuring on webpage
//get is read and post is update
//we dont have a database yet 
//get request to find things
//app.get("/", function(req, res){ res.send("Hello")})
//think about all the routes into the webpage and all the things that are going to happen
//jumbled shinangans is a dynamic part
// /edit allows you to edit
//when ever / hits then the function runs
//get request from client side, 
//request has all info from client about what theyre looking for ect
app.get("/", function(req, res){
    res.send("Hello");
})
app.listen(port, function(){
    //port we need to know is 80, htp, all sites use it
    //or port 443 is htps which is what all sites have to use
    //internet flags you as malicious if you dont use htpsnpm
    console.log("Server Running on localhost:3000");
    //use this to embbed javascript within the doc
    //inside <% if(user){ %> <h2><% = user.name %></h2><%} %>}
});