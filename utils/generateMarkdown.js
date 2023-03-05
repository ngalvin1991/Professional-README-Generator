// function to generate markdown for README
const license = require("../index");


function generateLicenseBadges(licenses) {
  const badge = {
    "The MIT License":
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost 1.0":
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 2-Clause License":
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "BSD 3-Clause License":
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Eclipse Public License 1.0":
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "The Hippocratic License 2.1":
      "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
    "The Hippocratic License 3.0":
      "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
    "IBM Public License Version 1.0":
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "ISC License (ISC)":
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "Mozilla Public License 2.0":
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "The Perl License":
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  };
  return badge[licenses];
}

function generateMarkdown(response, getBadges) {
  return `# Project Title: ${response.project}


  ## Table of Contents: 
  - [Installation](#installation)
  - [Useage](#usage)
  - [Licensing](#license)
  - [Contact](#contact)

## Project Description 

${response.description}

## Installation 
  To install the app run the following: 

  ${response.installation}

## Usage 

  Please use the following command to run the application: 

  ${response.usage}

## License 

  This application uses the following license: 

  ${response.licenses}
  ${getBadges}


  ## Questions 

  Should you have any questions regarding the application, repo or wish to contact me directly, please email me: 
    ${response.email}. 

  If you wish to follow me on Github and LinkedIn, please use the links below: 
  - ${response.github},
  - ${response.linkedin}
  `;
}

module.exports = {
  generateMarkdown,
  generateLicenseBadges,
};
