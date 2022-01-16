// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//  array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub Username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description.");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmInstallation",
    message:
      'Would you like to enter installation instructions for an "Installation" section?',
    default: true,
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmUsage",
    message:
      'Would you like to enter usage instructions for a "Usage" section?',
    default: true,
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples on how to use your project. Include scrrenshots as needed.",
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmContributing",
    message:
      "Would you like to enter contribution guidelines for a 'Contributing' section?",
    default: true,
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines for your project?",
    when: ({ confirmContributing }) => {
      if (confirmContributing) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmTesting",
    message:
      "Do you have a test you would like to include in a 'Testing' section?",
    default: true,
  },
  {
    type: "input",
    name: "testing",
    message: "Type the command to run your test:",
    when: ({ confirmTesting }) => {
      if (confirmTesting) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmQuestions",
    message:
      "Would you like to include contact information so that you can be reached if there are questions about this project?",
    default: true,
  },
  {
    type: "confirm",
    name: "confirmEmail",
    message: "Would you like include your email?",
    when: ({ confirmQuestions }) => {
      if (confirmQuestions) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    when: ({ confirmEmail }) => {
      if (confirmEmail) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license from the list below:",
    choices: ["Apache", "Mozilla", "MIT", "none"],
  },
  {
    type: "confirm",
    name: "confirmContributors",
    message:
      'Would you like to add contributors to this project in a "Contributors" section?',
    default: false,
  },
  {
    type: "input",
    name: "contributors",
    message: "Enter a contributors name.",
    when: ({ confirmContributors }) => {
      if (confirmContributors) {
        return true;
      } else {
        return false;
      }
    },
  },
];

//  function to write README file
function writeToFile(fileName, data) {}


// function to initialize app
const init = () => {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data))
  });
};

// function call to initialize app
init()


