
const inquirer = require('inquirer'); // package included for prompting questions
const fs = require('fs'); // this will get the filesystem
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        message: 'What are the usage of your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Write your contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write your tests instructions',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Your github account',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'MIT', 'Apache 2.0'],
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log('something went wrong!');
        }
        console.log("Success! You created your README!");
    });
};

function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();
