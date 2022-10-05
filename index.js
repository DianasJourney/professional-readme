// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = ('inquirer')
// TODO: Create an array of questions for user input
const questions = ([{
      type: 'input',
      message: 'Project Title',
      name: 'Title',
      
    },
    {
      type: 'input',
      message: 'Write a description about your project.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Installation instructions',
      name: 'What are required to install this project?'
    },
      {
      type: 'input',
      message: 'What are the usage for your project?',
      name: 'Usage',
    },
      {
      type: 'input',
      message: 'What are the contribution?',
      name: 'Contributing',
    },
      {
      type: 'input',
      message: 'What are the tests on this project?',
      name: 'Test',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
