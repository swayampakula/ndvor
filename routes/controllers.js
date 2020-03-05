const Person = require("../models/Person");

const addPerson = async (persons, successCB, errorCB) => {
  try {
    let newpersons = [];
    // TODO - Validate persons array before adding.

    console.log("inside try of addPerson", persons);

    for (let i = 0; i < persons.length; i++) {
      console.log(persons);
      let newperson = new Person(persons[i]);
      let response = await newperson.save();

      newpersons.push(response);
    }

    successCB(newpersons);
  } catch (error) {
    errorCB(error);
  }
};

const getPersons = async (successCB, errorCB) => {
  try {
    let response = await Person.find();
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

const getPerson = async (personId, successCB, errorCB) => {
  try {
    // console.log(personId);
    let response = await Person.findById(personId);
    // console.log("Person",response);
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

module.exports = {
  addPerson,
  getPersons,
  getPerson
};
