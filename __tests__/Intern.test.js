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

  describe("Interns ID Test", () => {
    // test initialization
    test("testing to get the right id", () => {
      // arrange, act
      const internObj = new Intern(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(internObj.getId()).toEqual(8);
    });
  });

  describe("Intern's Name Test", () => {
    // test initialization
    test("testing to get the right name", () => {
      // arrange, act
      const internObj = new Intern(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(internObj.getName()).toEqual("Nessa");
    });
  });

  describe("Intern's email Test", () => {
    // test initialization
    test("testing to get the right email", () => {
      // arrange, act
      const internObj = new Intern(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(internObj.getEmail()).toEqual("nessa@gmail.com");
    });
  });

  describe("Intern's school Test", () => {
    // test initialization
    test("testing to get the right school", () => {
      // arrange, act
      const internObj = new Intern(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(internObj.getSchool()).toEqual("nessa123");
    });
  });

  describe("Intern's role Test", () => {
    // test initialization
    test("testing to get the right role", () => {
      // arrange, act
      const internObj = new Intern(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(internObj.getRole()).toEqual("Intern");
    });
  });


