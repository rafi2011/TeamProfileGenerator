const Manager = require("../lib/Manager");

describe("Manager's Class Test", () => {
    // test initialization
    test("Test for the right class", () => {
      // arrange, act
      const managerObj = new Manager(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(managerObj instanceof Manager).toEqual(true);
    });
  })

  describe("Manager's ID Test", () => {
    // test initialization
    test("testing to get the right id", () => {
      // arrange, act
      const managerObj = new Manager(8, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(managerObj.getId()).toEqual(8);
    });
  });

  describe("Manager's Name Test", () => {
    // test initialization
    test("testing to get the right name", () => {
      // arrange, act
      const managerObj = new Manager(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(managerObj.getName()).toEqual("Nessa");
    });
  });
  describe("Manager's email Test", () => {
    // test initialization
    test("testing to get the right email", () => {
      // arrange, act
      const managerObj = new Manager(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(managerObj.getEmail()).toEqual("nessa@gmail.com");
    });
  });

  describe("Manager's office number Test", () => {
    // test initialization
    test("testing to get the right office number", () => {
      // arrange, act
      const managerObj = new Manager(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(managerObj.getEmail()).toEqual("nessa@gmail.com");
    });
  });

  describe("Manager's role Test", () => {
    // test initialization
    test("testing to get the right role", () => {
      // arrange, act
      const managerObj = new Manager(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(managerObj.getRole()).toEqual("Manager");
    });
  });

