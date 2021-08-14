// import employee

const Employee = require("../lib/Employee");

describe("Employee Class Test", () => {
  // test initialization
  test("Employee initialization", () => {
    // arrange, act
    const employeeObj = new Employee(5, "Nessa", "nessa@gmail.com");

    // assert
    expect(employeeObj instanceof Employee).toEqual(true);
  });
});
// test success(properties, methods)
describe("Employee Props", () => {
  test("Name Prop", () => {
    //arrange
    const expectednamevalue = "Joanna";
    // act
    employeeObj = new Employee(5, "Joanna", "joanna123@gmail.com");

    //assert
    expect(employeeObj.getName()).toBe(expectednamevalue);
  });
});
// test failures, undefined, errors

describe("Employee ID", () => {
    test("testing to get the correct ID ", () => {
      //arrange
      const expectedIDvalue = 11;
      // act
      var employeeObj = new Employee(11, "Joanna", "joanna123@gmail.com");
  
      //assert
      expect(employeeObj.getId()).toBe(expectedIDvalue);
    });
  });

  describe("Employee's email", () => {
    test("testing to get the right email", () => {
      //arrange
      const expectedEmailvalue = "joanna123@gmail.com";
      // act
      var employeeObj = new Employee(5, "Joanna", "joanna123@gmail.com");
  
      //assert
      expect(employeeObj.getEmail()).toBe(expectedEmailvalue);
    });
  });

  describe("Employee's role", () => {
    test("testing to get the right role", () => {
      //arrange
      const expectedRolevalue = "Employee";
      // act
      var employeeObj = new Employee(5, "Joanna", "joanna123@gmail.com");
  
      //assert
      expect(employeeObj.getRole()).toBe(expectedRolevalue);
    });
  });