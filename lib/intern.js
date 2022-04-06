const employee = require('./employee');

class intern extends employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    };
    getSchool(){
        return `This teammember currently attends ${this.school}`
    };
    getRole(){
        let role = 'Intern';
        return `Employee's Role: ${role}`;    }
};

module.exports = intern;