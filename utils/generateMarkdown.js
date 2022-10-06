// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge ='';
  if(license === 'MIT') {
    badge = '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'Apache 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0'){
    licenseLink = 'test.com'
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if(license === 'None') {
    licenseSection = '';
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# <p align="center"> ${data.title} </p>

   ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description
${data.description}

## Installation
${data.installation}
## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Tests
${data.tests}

## Questions? Feel free to contact me
- Github: ${data.github}
- Email: ${data.email}

## License
${data.license}
${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
