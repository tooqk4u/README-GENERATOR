// creat const for badges
const badges = {
  Mozilla:
    "[![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  MIT: 
    "[![License: MIT](https://img.shields.io/badge/ License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  Unlicensed:
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  Apache:
    "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  none: "",
};

// create const for license sites
const licenseLinks = {
  Mozilla: "https://opensource.org/licenses/MPL-2.0",
  MIT: "https://opensource.org/licenses/MIT",
  Unlicensed: "http://unlicense.org/",
  Apache: "https://opensource.org/licenses/Apache-2.0",
  none: "",
};

// functions to create a license link
function renderLicenseLink(license) {
  return licenseLinks[license];
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badges[data.license]}

---
  
## Description 
  
${data.description}

---
  
## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
* [License](#license)

---
---

## Installation


${data.installation}

---
---

## Usage

${data.usage}

---
---

## License

Information on the license(s)

${renderLicenseLink(data.license)}

---
---

## Contributing

Guidelines for contributions:

${data.contributing}

---
---

## Tests

${data.testing}

---
---

## Questions?

Contact me at

Email: [${data.email}](mailto:${data.email})

GitHub: [${data.github}](https://github.com/${data.github}).

 ---
 ---

## Credits 
 
${data.credits}

---
---
---
[Back to Contents](#table-of-contents)
`;
}
module.exports = generateMarkdown;
