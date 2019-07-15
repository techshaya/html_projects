var express = require("express")
var marked = require("marked")
var path = require("path");
var fs = require("fs")
var ejs = require("ejs")
app = express()

app.get("/",function(req,res,next)
{
	
	file = fs.readFile(path.join(__dirname,"markdown/index.md"),"utf8", function(err,data) {
		if(err)
		{
			console.log(err)
		}
		res.send(marked(data.toString()));
		console.log(marked(data.toString()))
	})
	console.log("How are you")
});	
app.use(express.static(path.join(__dirname,"public")))
app.set('view engine',"ejs")
app.set("views",path.join(__dirname,"views"))
app.get("/about",function(req,res,next)
{
	res.render("hello",{
		name:"Rameel Azhungal Chellatan",
		people: ['Rameel','Rajesh','Ram Achuthan']
	})
})

app.listen(3000,function()
{
	console.log("Server is running on port 3000")
})