var express = require("express");
var router = express.Router();
const Person = require("../models/Person");
const controller = require("./controllers");

/* GET home page. */
router.post("/add", function(req, res, next) {
  try {
    console.log(req.body);
    controller.addPerson(
      req.body,
      person => {
        res.send(person);
      },
      err => {
        console.log(err);
        throw err;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/", (req, res) => {
  try {
    controller.getPersons(
      persons => {
        res.send(persons);
      },
      err => {
        console.log(err);
        throw err;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", (req, res) => {
  try {
    // console.log(req.params.id);
    controller.getPerson(
      req.params.id,
      person => {
        // console.log(person);
        res.send(person);
      },
      error => {
        throw error;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
