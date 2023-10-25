console.log("Greetings, World!");

const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err, fileData) => {
  if (err) {
    console.log("An error occurred: " + err);
  } else {
    console.log("The file content is as follows:\n" + fileData);
  }
});

const starWarsQuotes = require("star-wars-quotes");
console.log(starWarsQuotes());


const superheroes = require('superheroes');
const randomSuperhero = superheroes.random();


const supervillains = require('supervillains');
supervillains.random();

console.log("In the quest for righteousness, we often need to make sacrifices, even our dearest aspirations. - " + randomSuperhero +
  "\nVS\nIn a world where power reigns, morality blurs, and the weak falter in pursuit. - " + supervillains.random());