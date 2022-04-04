const employee = require('./employee');

class intern extends employee{
    constructor(school){
        //const name
        //const id
        //const email
        //super(name, id, email);
        this.school = school;
    };
    getSchool(){

    };
    getRole(){
        //overrides to return 'Intern'
    }
};

module.exports = intern;