const express = require('express');
      app     = express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
});

app.get("/index.html",function(req,res){
    res.render("index");
});

app.get("/education.html",function(req,res){
    res.render("education");
});

app.get("/skills.html",function(req,res){
    res.render("skills");
});

app.get("/projects.html",function(req,res){
    res.render("projects");
});

app.get("/awards.html",function(req,res){
    res.render("awards");
});

app.get("/cocurricular.html",function(req,res){
    res.render("cocurricular");
});

app.get("/blog.html",function(req,res){
    res.render("blog");
});

app.get("/experience.html",function(req,res){
    res.render("experience");
});

app.get("/interests.html",function(req,res){
    res.render("interests");
});

app.get("/contact.html",function(req,res){
    res.render("contact");
});

app.listen(process.env.PORT||3000);