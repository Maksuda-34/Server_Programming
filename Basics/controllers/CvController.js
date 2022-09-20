const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  experiences = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experiences = JSON.parse(String(experiences));

  skills = fs.readFileSync("data/skill", { encoding: "utf-8" });
  skills = JSON.parse(String(skills));

  languages = fs.readFileSync("data/language", { encoding: "utf-8" });
  languages = JSON.parse(String(languages));

  edus = [];
  exp = [];
  skill = [];
  language=[];

  for (let key in educations) {
    edus.push(educations[key]);
  }
  for (let key in experiences) {
    exp.push(experiences[key]);
  }
  for (let key in skills) {
    skill.push(skills[key]);
  }
  for (let key in languages) {
    language.push(languages[key]);
  }

  res.render("cv", { username: "Syeda Maksuda Akter", myemail: "maksuda@gmail.com", myoccupation: "Developer", address:"Uttara,Dhaka",phone_num: 0191111111,educations: edus ,experiences : exp , skills : skill,languages : language});
};

module.exports = { getCV: getCV };
