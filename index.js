const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const {generateMarkdown, generateLicenseBadges} = require("./utils/generateMarkdown");

// array of questions for user
inquirer.prompt([
    {
        type: "input",
        message: "Please input the title of your project:",
        name: "project",
    },
    {
        type: "input",
        message: "Please provide a description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "Does anything need to be installed?",
        name: "installation",
    },
    {
        type: "input",
        message: "How is the app used?",
        name: "usage",
    },
    {
        type: "list",
        message: "What was the app built with?",
        name: "built",
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.Js",
            "JQuery",
            "React",
        ],
    },
    {
        type: "input",
        message: "Please provide your email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Please provide a link to your Github:",
        name: "github"
    },
    {
        type: "input",
        message: "Please provide a link to your LinkedIn:",
        name: "linkedin"
    },
    {
        type: "list",
        message: "What license is required for this project?",
        name: "licenses",
        choices: [
            "The MIT License",
            "Apache 2.0",
            "Boost 1.0",
            "BSD 2-Clause License",
            "BSD 3-Clause License",
            "Eclipse Public License 1.0",
            "The Hippocratic License 2.1",
            "The Hippocratic License 3.0",
            "IBM Public License Version 1.0",
            "ISC License (ISC)",
            "Mozilla Public License 2.0",
            "The Perl License",
        ]
    }
])

// function to write README file
.then ((response) => {
    const getBadges = generateLicenseBadges(response.licenses);
    const readMeInput = generateMarkdown(response, getBadges);
    const markdownInput = `${readMeInput}`;

    fs.writeFile("GeneratedREADME.md", markdownInput, (err) =>
    err ? console.error(err) : console.log("Sucess! You have generated a README file."));
});
