const employee = require('./employee');

class engineer extends employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };
    getGithub(){
        return `Engineer's GitHub Username: ${this.github}`
    };
    getRole(){
        let role = 'Engineer';
        return `Employee's Role: ${role}`;
    }
};

module.exports = engineer;