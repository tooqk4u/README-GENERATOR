// creat const for badges
const badges = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Mozilla": "[![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
};

// create const for license sites
const licenseLinks = {
  "MIT": "https://opensource.org/licenses/MIT",
  "Apache": "https://opensource.org/licenses/Apache-2.0",
  "Mozilla": "https://opensource.org/licenses/MPL-2.0",
  "none": "http://unlicense.org/"
};


// function that returns a license badge based on which license is passed in if there is no license, an empty string is returned
function renderLicenseBadge(license) {}

// Create a function that returns the license link if there is no license, an empty string is returned
function renderLicenseLink(license) {}

// function that returns the license section of README if there is no license, an empty string is returned
function renderLicenseSection(license) {}

//  function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
