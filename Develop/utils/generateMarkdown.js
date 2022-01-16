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
