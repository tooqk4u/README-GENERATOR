// creat const for badges
const badges = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Mozilla": "[![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "Unlicensed": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "none": ""
};

// create const for license sites
const licenseLinks = {
  "MIT": "https://opensource.org/licenses/MIT",
  "Apache": "https://opensource.org/licenses/Apache-2.0",
  "Mozilla": "https://opensource.org/licenses/MPL-2.0",
  "Unlicensed": "http://unlicense.org/",
  "none": ""
};



// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license =="none") {
    return ""    
  } else if(license == "Apache" || "Mozilla" || "MIT" || "Unlicensed"){
  return badges[license]
  };
}
renderLicenseBadge()

// functions to create a license link
function renderLicenseLink(license) {
  return licenseLinks[license]
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badges[data.license]}
  
## Description 
  
${data.description}
  
## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)


## Installation

${data.installation}

## Usage

${data.usage}


## License

This license is covered under: ${(data.license)  +  renderLicenseLink(data.license)}


## Contributing

${data.contributing}

## Tests

${data.testing}

## Questions

Contact information for questions:

If you have any questions follow the link to my github profile

[${data.github}](https://github.com/${data.github}).

or 

I can be reached at:
[${data.email}](mailto:${data.email}) 

## Credits 
 
 ${data.credits}


`;
}


module.exports = generateMarkdown;
