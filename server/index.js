//jshint esversion:6

const path = require('path');

const express = require("express");

// const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");
// const ejs = require("ejs");
const mongoose = require('mongoose');
const bcrypt= require("bcrypt");
const saltRounds= 15;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../amazon-clone/build')));

// app.set('views', __dirname + '/views');

// app.set('views', __dirname + '../amazon-clone/src/components');

// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connect("mongodb+srv://admin-pranshu:MongoXPranshu24@cluster0.pzfo6fe.mongodb.net/amazonDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema ({
  name: String,
  mobile: String,
  email: String,
  password: String
});

const User = new mongoose.model("User", userSchema);

app.post("/register", function(req, res){

  bcrypt.hash(req.body.password, saltRounds, function(err, hash){
    const user = new User({
      name: req.body.name,
      mobile: req.body.phone,
      email: req.body.email,
      password: hash
    });
  
    user.save(function(err){
      if (!err){
        console.log("Registered !");
        res.redirect("/");
      }
    });
  });
});

let userPassword;

app.post("/signin", function(req, res){
  const emailMobile= req.body.emailmobile;

  User.findOne({$or: [{email: emailMobile}, {mobile: emailMobile}]}, function(err, foundUser){
    if(err){
      console.log(err);
    }
    else{
      if(foundUser){
        console.log("Found !");
        userPassword=foundUser.password;
        res.redirect("/signin/auth");
      }
      else{
        console.log("Not Found !");
        res.redirect("/");
      }
    }
  });

});

app.post("/signin/auth", function(req, res){
  const password=req.body.password;

  bcrypt.compare(password, userPassword, function(err, result){
    if(result=== true){
      console.log("Matched !");
      console.log(userPassword);
      res.redirect("/");
    }
    else{
      console.log("Not Matched !");
      res.redirect("/signin");
    }
  });

});

// app.listen(3001, function() {
//   console.log("Server started on port 3001");
// });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../amazon-clone/build', 'index.html'));
});

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});