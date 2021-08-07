// import employee

const { Employee} = require("../lib/Employee")

describe ('Employee Class Test', () => {
    // test initialization
    test('Employee initialization', () => {
        // arrange, act
        const employeeObj = new Employee();

        // assert
        expect (employeeObj instanceof Employee).toBeEqualTo(true)
    })
    // test success(properties, methods)
    describe('Employee Props', () => {
        test('Name Prop', ()=> {
            //arrange
            const expectednamevalue = "Joanna"
            // act
            employeeObj = new Employee(expectednamevalue)

            //assert
            expect(employeeObj.name).toBe(expectednamevalue)


        })
    })
    // test failures, undefined, errors
})