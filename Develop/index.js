// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer .prompt ()

const questions = [
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'Github Username',
    },
    {
        type: 'input',
        message: 'What is your Email Address',
        name: 'Email Address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
