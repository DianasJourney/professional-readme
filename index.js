// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // package included for prompting questions
const fs = require('fs'); // this will get the filesystem
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Give your project a title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a descriptive message about your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What do you need to install?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what are the usage of your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'write your contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'write your tests instructions',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Feel free to contact me',
    },
    {
        type: 'input',
        name: 'email',
        message: 'your email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'your github account',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license does your project use?',
        choices: ['None', 'MIT', 'Apache 2.0'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log('something went wrong!');
        }
        console.log("Success! You created your README!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
