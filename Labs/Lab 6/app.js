let express = require ('express');
let app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let port = 3000;

app.get("/", function(req,res){
    res.send("Your response has been recorded");
})
app.get("/s", function(req, res){
    console.log("Your search will return results in 6-12 weeks.");
})
app.post("/search", function(req,res){
    console.log(req.body.search);
    res.redirect("/s");
})
app.post("/login", function(req, res){
    console.log(req.body.login);
    res.redirect("/");
})
app.post("/signup", function(req, res){
    console.log(req.body.signup);
    res.redirect("/");
})
app.post("/post", function(req, res){
    console.log(req.body.post);
    res.redirect("/");
})
app.listen(port, function(){
    console.log("server is running on port 3000")
})
//unfortunately i could not get these files to open up/run on my mac, I tried all day and it just didn't want to cooperate
//i am unable to install/use nodemon, sometimes it says its installed but then none of the commands work, other times it just throws a bunch of errors
//my ejs files are also showing up as having errors
