const Engineer = require("../lib/Engineer");

describe("Engineer Class Test", () => {
    // test initialization
    test("Engineer initialization", () => {
      // arrange, act
      const engineerObj = new Engineer(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(engineerObj instanceof Engineer).toEqual(true);
    });
  });
  describe("Engineer ID Test", () => {
    // test initialization
    test("testing to get the right id", () => {
      // arrange, act
      const engineerObj = new Engineer(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(engineerObj.getId()).toEqual(6);
    });
  });
  describe("Engineer Name Test", () => {
    // test initialization
    test("testing to get the right name", () => {
      // arrange, act
      const engineerObj = new Engineer(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(engineerObj.getName()).toEqual("Nessa");
    });
  });
  describe("Engineer email Test", () => {
    // test initialization
    test("testing to get the right email", () => {
      // arrange, act
      const engineerObj = new Engineer(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(engineerObj.getEmail()).toEqual("nessa@gmail.com");
    });
  });

  describe("Engineer github Test", () => {
    // test initialization
    test("testing to get the right github", () => {
      // arrange, act
      const engineerObj = new Engineer(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(engineerObj.getGithub()).toEqual("nessa123");
    });
  });

  describe("Engineer role Test", () => {
    // test initialization
    test("testing to get the right role", () => {
      // arrange, act
      const engineerObj = new Engineer(6, "Nessa", "nessa@gmail.com", "nessa123");
  
      // assert
      expect(engineerObj.getRole()).toEqual("Engineer");
    });
  });



