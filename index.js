const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer .prompt([
    {
        type:"input",
        message:"Please input the title of your project:",
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
        name: "useage",
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
        name: "license",
        choices: [
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
    }
]);


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
