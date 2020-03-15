const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let manager;

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your manager's name?",
            name: 'managerName'
        },
        {
            type: "number",
            message: "What is your manager's ID?",
            name: 'managerId'
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: 'managerEmail'
        },
        {
            type:"number",
            message: "What is your manager's office number",
            name: 'managerPhone'
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerPhone)
        teamList.push(manager);
        createTeam();
    })
}

const createTeam = () => {
    inquirer.prompt([
        {
            type:"list",
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'Done adding team members'],
            name: 'memberChoice'
        }
    ]).then(userChoice => {
        switch(userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
              break;
              case "Intern":
              addIntern();
              break;
            default:
                buildTeam();
            }
        })
    }
    
const addEngineer = () =>{
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'engineerName'
        },
        {
            type: "number",
            message: "What is your engineer's ID?",
            name: 'engineerId'
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: 'engineerEmail'
        },
        {
            type:"input",
            message: "What is your engineer's Github username?",
            name: 'engineerGithub'
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        teamList.push(engineer);
        createTeam();
    })
}

const addIntern = () =>{
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'internName'
        },
        {
            type: "number",
            message: "What is your intern's ID?",
            name: 'internId'
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: 'internEmail'
        },
        {
            type:"input",
            message: "What is your intern's school?",
            name: 'internSchool'
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamList.push(intern);
        createTeam();
    })
}

createManager();

const buildTeam = () => {
    console.log(teamList);
}

