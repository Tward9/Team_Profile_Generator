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

    };
    getEmail(){

    };
    getRole(){
        //returns 'Employee'
    };
};

module.exports = employee;