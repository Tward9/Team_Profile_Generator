const employee = require('./employee');

class manager extends employee{
    constructor(officeNumber){
        //const name
        //const id
        //const email
        //super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getRole(){
        //overrides to return 'Manager'
    }

};

module.exports = manager;