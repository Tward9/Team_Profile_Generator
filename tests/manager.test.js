const manager = require('../lib/manager');

describe('manager', () =>{
    describe('getRole', () =>{
        it(`should output the employee's role`, () => {
            const person = new manager('name', '1', 'name.email');

            expect(person.getRole()).toBe(`Employee's Role: Manager`)
        });
    });
})