// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "what is your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "enter a description for your project",
  },
  {
    type: "input",
    name: "installation",
    message: "enter the installation instructions for your project",
  },
  {
    type: "input",
    name: "usage",
    message: "enter the usage instructions for your project",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license",
    choices: [
      "Apache",
      "GPL",
      "Apache 2",
      "MIT + file LICENSE",
      "MIT/Apache-2.0",
      "lgpl_2_1",
      "BSD",
      "compliant",
      "MIT",
      "ISC",
      "Microsoft Public License",
    ],
  },
  {
    type: "input",
    name: "credits",
    message: "enter the credits for your project",
  },
  {
    type: "input",
    name: "tests",
    message: "test info: ",
  },
  {
    type: "input",
    name: "contributing",
    message: "enter contribution guidelines: ",
  },
  {
    type: "input",
    name: "questions",
    message: "how to contact for questions: ",
  },
  {
    type: "input",
    name: "username",
    message: "enter your github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "enter your email address: ",
  },
  {
    type: "list",
    name: "color",
    message: "Select a color for your license badge",
    default: "red",
    choices: [
      "brightgreen",
      "green",
      "yellowgreen",
      "yellow",
      "orange",
      "red",
      "blue",
      "lightgrey",
      "success",
      "important",
      "critical",
      "informational",
      "inactive",
      "blueviolet",
      "ff69b4",
      "9cf",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    //const filename = `${data.name.toLowerCase().split(" ").join("")}.md`;
    const filename = "README.md";
    fs.writeFile(
      filename,
      `# ${data.name}\n
![badge](https://img.shields.io/badge/license-${data.license
        .split(" ")
        .join("_")}-${data.color})\n


## Description
${data.description}\n

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
${data.installation}\n

## Usage
${data.usage}\n

## License
${data.license}\n

## Credits
${data.credits}\n

## Tests
${data.tests}\n

## Contributing
${data.contributing}\n

## Questions
[${data.username} on GitHub](https://github.com/${data.username})\n
Email: ${data.email}\n
${data.questions}\n
      
      `,

      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });
}

// Function call to initialize app
init();
