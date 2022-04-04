const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const inquirer = require('inquirer');
const output = [];
let newEmployee = [];
const managerQuestions = [
    //name
    {
        type: 'input',
        name: 'employeeName',
        message: `What is the Team Managers name?`,
    },
    //id
    {
        type: 'input',
        name: 'id',
        message: 'What is their Employee ID',
    },
    //email
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    //office number
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office phone number?',
    },
    //add another employee?
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Would you like to add another Team Member?',
        choices: ['yes', 'no'],
    },
];
const employeeQuestions = [
    //employee type
    {
        type: 'list',
        name: 'employeeType',
        message: 'What team member would you like to add',
        choices: ['Engineer', 'Intern', 'Finish Team'],
    },
    //name
    {
        type: 'input',
        name: 'engineerName',
        message: `What is this Employee's name?`,
        when(answers2) {
            return answers2.employeeType === 'Engineer'
        },
    },
    //id
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is their Employee ID',
        when(answers2) {
            return answers2.employeeType === 'Engineer'
        },
    },
    //email
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is their email address?',
        when(answers2) {
            return answers2.employeeType === 'Engineer'
        },
    },
    //github
    {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub Username?',
        when(answers2) {
            return answers2.employeeType === 'Engineer'
        },
    },
    //name
    {
        type: 'input',
        name: 'internName',
        message: `What is this Employee's name?`,
        when(answers2) {
            return answers2.employeeType === 'Intern'
        },
    },
    //id
    {
        type: 'input',
        name: 'internId',
        message: 'What is their Employee ID',
        when(answers2) {
            return answers2.employeeType === 'Intern'
        },
    },
    //email
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is their email address?',
        when(answers2) {
            return answers2.employeeType === 'Intern'
        },
    },
    //School
    {
        type: 'input',
        name: 'school',
        message: 'What is their School?',
        when(answers2) {
            return answers2.employeeType === 'Intern'
        },
    },
    //add another employee?
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Would you like to add another Team Member?',
        choices: ['yes', 'no'],
    },
];
function getManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
        //do stuff with answers
        output.push(answers);
        //then recall prompt for next employee
        if (answers.addEmployee === 'yes') {
            getEmployee();
            output.push(newEmployee);
        }else {
            // do something
            console.log(output);
        }
    });
};
function getEmployee() {
    newEmployee = [];
    inquirer.prompt(employeeQuestions).then((answers2) => {
        //do stuff
        newEmployee.push(answers2);
        if (answers2.addEmployee === 'yes') {
            getEmployee();
            output.push(newEmployee);
        }else {
            //do something
            console.log(output);
        }
        return newEmployee;
    });
    return newEmployee;
}
getManager();