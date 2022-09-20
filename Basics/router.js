const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");

const fs = require("fs");
 router.get("/", getCV);
 router.get("/form", (req, res) => {
     res.render('form');
 });

     router.post("/form", (req,res) => {
     var name = req.body.username;
     var email = req.body.myemail;
     var occu = req.body.myoccupation;
     var loc  = req.body.address;
     var num  = req.body.phone_num;


   res.render("cv", { username: name, myemail: email, myoccupation: occu, address: loc, phone_num: num, educations: edus ,experiences : exp , skills : skill,languages : language});

     })

module.exports = router;
