const intern = require('../lib/intern');

describe('intern', () =>{
    describe('getSchool', () => {
        it(`should output the Intern's School`, () => {
            const person = new intern('name', '1', 'name.email', 'Northwestern');

            expect(person.getSchool()).toBe(`This teammember currently attends Northwestern`)
        });
    });
    describe('getRole', () =>{
        it(`should output the employee's role`, () => {
            const person = new intern('name', '1', 'name.email', 'Northwestern');

            expect(person.getRole()).toBe(`Employee's Role: Intern`)
        });
    });
});