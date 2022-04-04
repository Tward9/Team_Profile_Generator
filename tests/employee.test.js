const { expect } = require('@jest/globals');
const employee = require('../lib/employee');

describe('employee', () =>{
    describe('getName', () =>{
        it(`should output the employee's name`, () => {
            const person = new employee('name', '1', 'name.email');

            expect(person.getName()).toBe(`Employee's Name: name`)
        })
    });
    describe('getId', () =>{

    });
    describe('getEmail', () =>{

    });
    describe('getRole', () =>{

    });
})