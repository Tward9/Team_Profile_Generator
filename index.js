const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const fs = require('fs');
const inquirer = require('inquirer');
const output = [];
let newEmployee = [];
let engineers = [];
let interns = [];
const HTMLTemplate = require('./util/HTMLTemplate');
const createManager = require('./util/createManager');
const createEngineer = require('./util/createEngineer');
const createIntern = require('./util/createIntern');
let totalEngineerHTML = '';
let totalManagerHTML = '';
let totalInternHTML = '';
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
        const teamManager = new manager(answers.employeeName, answers.id, answers.email, answers.officeNumber)
        output.push(answers);
        //then recall prompt for next employee
        if (answers.addEmployee === 'yes') {
            getEmployee();
            // output.push(newEmployee);
        } else {
            // do something
            output.forEach(teammember => {
                if (teammember.employeeType === 'Engineer') {
                    console.log('Creating Engineer Profile');
                    const engineerHTML = createEngineer(teammember);
                    totalEngineerHTML += engineerHTML;
                    console.log(totalEngineerHTML);
                    new engineer(teammember.engineerName, teammember.engineerId, teammember.engineerEmail, teammember.github);
                    // consclole.log(engineerHTML);
                } else if (teammember.employeeType === 'Intern') {
                    console.log(`Creating Intern Profile`);
                    const internHTML = createIntern(teammember);
                    totalInternHTML += internHTML;
                    new intern(teammember.internName, teammember.internId, teammember.internEmail, teammember.school)
                } else {
                    console.log(`Creating Manager Profile`);
                    const managerHTML = createManager(teammember);
                    totalManagerHTML += managerHTML;
                    new manager(teammember.employeeName, teammember.id, teammember.email, teammember.officeNumber)
                    // console.log(managerHTML);
                };

            });
            createHTML(totalManagerHTML, totalEngineerHTML, totalInternHTML)
        };
    });
};
function getEmployee() {
    newEmployee = [];
    engineers = [];
    interns = [];
    inquirer.prompt(employeeQuestions).then((answers2) => {
        if (answers2.employeeType === 'Engineer') {
            //add new engineer(answers2.stuff) to array?
            output.push(answers2);
            // output.push(engineers);
            if (answers2.addEmployee === 'yes') {
                getEmployee();
            } else {
                //do something
                // console.log(output);
                output.forEach(teammember => {
                    if (teammember.employeeType === 'Engineer') {
                        console.log('Creating Engineer Profile');
                        const engineerHTML = createEngineer(teammember);
                        totalEngineerHTML += engineerHTML;
                        console.log(totalEngineerHTML);
                        new engineer(teammember.engineerName, teammember.engineerId, teammember.engineerEmail, teammember.github);
                        // consclole.log(engineerHTML);
                    } else if (teammember.employeeType === 'Intern') {
                        console.log(`Creating Intern Profile`);
                        const internHTML = createIntern(teammember);
                        totalInternHTML += internHTML;
                        new intern(teammember.internName, teammember.internId, teammember.internEmail, teammember.school)
                    } else {
                        console.log(`Creating Manager Profile`);
                        const managerHTML = createManager(teammember);
                        totalManagerHTML += managerHTML;
                        new manager(teammember.employeeName, teammember.id, teammember.email, teammember.officeNumber)
                        // console.log(managerHTML);
                    };

                });
                createHTML(totalManagerHTML, totalEngineerHTML, totalInternHTML);
            };
        } else if (answers2.employeeType === 'Intern') {
            //add new intern(answers2.stuff) to array?
            output.push(answers2);
            if (answers2.addEmployee === 'yes') {
                getEmployee();
            } else {
                //do something
                // console.log(output);
                output.forEach(teammember => {
                    if (teammember.employeeType === 'Engineer') {
                        console.log('Creating Engineer Profile');
                        const engineerHTML = createEngineer(teammember);
                        totalEngineerHTML += engineerHTML;
                        console.log(totalEngineerHTML);
                        new engineer(teammember.engineerName, teammember.engineerId, teammember.engineerEmail, teammember.github);
                        // consclole.log(engineerHTML);
                    } else if (teammember.employeeType === 'Intern') {
                        console.log(`Creating Intern Profile`);
                        const internHTML = createIntern(teammember);
                        totalInternHTML += internHTML;
                        new intern(teammember.internName, teammember.internId, teammember.internEmail, teammember.school)
                    } else {
                        console.log(`Creating Manager Profile`);
                        const managerHTML = createManager(teammember);
                        totalManagerHTML += managerHTML;
                        new manager(teammember.employeeName, teammember.id, teammember.email, teammember.officeNumber)
                        // console.log(managerHTML);
                    };

                });
                createHTML(totalManagerHTML, totalEngineerHTML, totalInternHTML);
            };
        } else {
            output.forEach(teammember => {
                if (teammember.employeeType === 'Engineer') {
                    console.log('Creating Engineer Profile');
                    const engineerHTML = createEngineer(teammember);
                    totalEngineerHTML += engineerHTML;
                    console.log(totalEngineerHTML);
                    new engineer(teammember.engineerName, teammember.engineerId, teammember.engineerEmail, teammember.github);
                    // consclole.log(engineerHTML);
                } else if (teammember.employeeType === 'Intern') {
                    console.log(`Creating Intern Profile`);
                    const internHTML = createIntern(teammember);
                    totalInternHTML += internHTML;
                    new intern(teammember.internName, teammember.internId, teammember.internEmail, teammember.school)
                } else {
                    console.log(`Creating Manager Profile`);
                    const managerHTML = createManager(teammember);
                    totalManagerHTML += managerHTML;
                    new manager(teammember.employeeName, teammember.id, teammember.email, teammember.officeNumber)
                    // console.log(managerHTML);
                };

            });
            createHTML(totalManagerHTML, totalEngineerHTML, totalInternHTML);
        };
    });
};
function createHTML(totalManagerHTML, totalEngineerHTML, totalInternHTML) {
    const HTML = HTMLTemplate();
    // const managerHTML = createManager(teammember);
    // const engineerHTML = createEngineer(teammember);
    const fullHTML = HTML + totalEngineerHTML + totalInternHTML + totalManagerHTML;
    // console.log(HTML);
    console.log(fullHTML);
    fs.writeFileSync("./src/index.html", fullHTML);
}
getManager();
//need to only generate html one time, but have card info added for every instance of a profile.
//in the loops, create more javascript to add everytime that type shows up?
//mush all together at end of loops some how