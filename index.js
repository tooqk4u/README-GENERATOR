// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

console.log(`
====================================================
Answer these questions to generate a new ReadME file
====================================================
`);

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
    message: "What is the title of your project? (Required)",
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
    name: "link",
    message: "Enter the GitHub link to your application.(Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("Please enter a GitHub link.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project. (Required)",
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
    message: "What are the steps required to install your project? (Required)",
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    },
    validate: (userinput) => {
      if (userinput) {
        return true;
      } else {
        console.log("Please enter steps required to install your project!");
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
      "Provide instructions and examples on how to use your project. Include screenshots as needed. (Required)",
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      } else {
        return false;
      }
    },
    validate: (userinput) => {
      if (userinput) {
        return true;
      } else {
        console.log("Please give instructions on how to use your project!");
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
    message:
      "What are the contribution guidelines for your project? (Required)",
    when: ({ confirmContributing }) => {
      if (confirmContributing) {
        return true;
      } else {
        return false;
      }
    },
    validate: (userinput) => {
      if (userinput) {
        return true;
      } else {
        console.log("What are the contribution guidelines!");
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
    message: "Type the command to run your test: (Required)",
    when: ({ confirmTesting }) => {
      if (confirmTesting) {
        return true;
      } else {
        return false;
      }
    },
    validate: (userinput) => {
      if (userinput) {
        return true;
      } else {
        console.log("Please enter the command to run your test!");
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
    when: ({confirmQuestions }) => {
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
    when: ({confirmEmail }) => {
      if (confirmEmail) {
        return true;
      } else {
        return false;
      }
    },
    validate: (userinput) => {
      if (userinput) {
        return true;
      } else {
        console.log("Please enter an email!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license from the list below:",
    choices: ["Mozilla","MIT","Unlicensed", "Apache", "none"],
  },
  {
    type: "confirm",
    name: "confirmContributors",
    message: "Would you like to add credits for the project?",
    default: true,
  },
  {
    type: "input",
    name: "credits",
    message: "Please list names to give people credit for contributing.",
    when: ({confirmContributors }) => {
      if (confirmContributors) {
        return true;
      } else {
        return false;
      }
    },
  },
];

//  function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log(
    "README completed! Please look in the readme-output folder for sample readme"
  );
}

// function to initialize app
const init = () => {
  inquirer.prompt(questions).then((data) => {
    writeToFile("./readme-output/README.md", generateMarkdown(data));
  });
};

// function call to initialize app
init();
