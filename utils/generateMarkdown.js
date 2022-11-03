function renderLicenseBadge(license) {
  let badge ='';
  if(license === 'MIT') {
    badge = '![License](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } 
  return badge;
}

function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0'){
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } 
  return licenseLink;
}

function renderLicenseSection(license) {
  let licenseSection = '';
  if(license === 'None') {
    licenseSection = 'N/A';
  } else if(license === 'Apache 2.0') {
    licenseSection = `License: A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === 'MIT') {
    licenseSection = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  return licenseSection;
}


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

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions?
### Feel free to contact me
- Github: ${data.github}
- Email: ${data.email}

## License
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
