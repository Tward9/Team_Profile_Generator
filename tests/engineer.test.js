const engineer = require('../lib/engineer');

describe('engineer', () =>{
    describe('getGithub', () => {
        it(`should output the Engineer's GitHub Username`, () => {
            const person = new engineer('name', '1', 'name.email', 'nameGit');

            expect(person.getGithub()).toBe(`Engineer's GitHub Username: nameGit`)
        });
    });
    describe('getRole', () =>{
        it(`should output the employee's role`, () => {
            const person = new engineer('name', '1', 'name.email', 'nameGit');

            expect(person.getRole()).toBe(`Employee's Role: Engineer`)
        });
    });
});