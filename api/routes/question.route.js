const express = require("express");
const events = require("events");
const questionRoutes = express.Router();

let Question = require("../models/Question");
let Answer = require("../models/Answer");

// 获取词库
questionRoutes.route("/").get(function (req, res) {
  Question.find(function (err, question) {
    if (err) {
      console.log(err);
    } else {
      let data = [];
      const myEventEmitter = new events.EventEmitter();
      myEventEmitter.on("next", addResult);

      function addResult() {
        res.json(data);
      }
      question.forEach((i, index) => {
        Answer.find({ question_id: i._id }, function (err, answer) {
          if (err) {
            console.log(err);
          } else {
            let obj = {
              question: i,
              answer,
            };
            data.push(obj);
            if (index === question.length - 1) {
              myEventEmitter.emit("next");
            }
          }
        });
      });
    }
  });
});

module.exports = questionRoutes;
