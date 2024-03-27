#!/usr/bin/env node

// const yargs = require("yargs");
// const argv = yargs.argv;
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

// url taken from pokeapi
const printFiveMoves = async (pokemon) => {
  const fiveMovesUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(fiveMovesUrl);
  const data = await response.json();
  const moves = data.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

// prompt is an promise and it takes array of objects
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name: ",
  },
]).then((answers) => {
  const pokemon = answers.pokemon; // pokemon refers to name property
  // pokemon names = [charmander, pikachu, ditto, mew, dragonite]
  printFiveMoves(pokemon);
});

// printFiveMoves(argv.pokemon)
// console.log("You are inside HOMEMADE CLI");
