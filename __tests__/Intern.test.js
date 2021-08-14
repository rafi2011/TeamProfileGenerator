const Intern = require("../lib/Intern");


describe("Intern Class Test", () => {
    // test initialization
    test("Test for the right class", () => {
      // arrange, act
      const internObj = new Intern(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(internObj instanceof Intern).toEqual(true);
    });
  })