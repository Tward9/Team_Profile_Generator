const employee = require('../lib/employee');

describe('employee', () =>{
    describe('getName', () =>{
        it(`should output the employee's name`, () => {
            const person = new employee('name', '1', 'name.email');

            expect(person.getName()).toBe(`Employee's Name: name`)
        });
    });
    describe('getId', () =>{
        it(`should output the employee's id`, () => {
            const person = new employee('name', '1', 'name.email');

            expect(person.getId()).toBe(`Employee's Id Number: 1`)
        });
    });
    describe('getEmail', () =>{
        it(`should output the employee's email`, () => {
            const person = new employee('name', '1', 'name.email');

            expect(person.getEmail()).toBe(`Employee's Email Address: name.email`)
        });
    });
    describe('getRole', () =>{
        it(`should output the employee's role`, () => {
            const person = new employee('name', '1', 'name.email');

            expect(person.getRole()).toBe(`Employee's Role: Employee`)
        });
    });
})