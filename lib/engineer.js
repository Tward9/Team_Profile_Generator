const employee = require('./employee');

class engineer extends employee{
    constructor(github){
        //const name
        //const id
        //const email
        //super(name, id, email);
        this.github = github;
    };
    getGithub(){

    };
    getRole(){
        //overrides to return 'Engineer'
    }
};

module.exports = engineer;