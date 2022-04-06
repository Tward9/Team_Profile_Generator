const employee = require('./employee');

class manager extends employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getRole(){
        let role = 'Manager'
        return `Employee's Role: ${role}`
    }

};

module.exports = manager;