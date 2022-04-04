class employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName(){
        return `Employee's Name: ${this.name}`
    };
    getId(){
        return `Employee's Id Number: ${this.id}`
    };
    getEmail(){
        return `Employee's Email Address: ${this.email}`
    };
    getRole(){
        let role = 'Employee'
        return `Employee's Role: ${role}`
    };
};

module.exports = employee;