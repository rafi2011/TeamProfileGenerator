
module.exports = {

    managerQuestions: [
    {   
        type: "input",
        message: "Please enter your Managers name ?",
        name: "nameManager"
    },
    {   
        type: "input",
        message: "what is managers id",
        name: "idManager",
    },
    {   
        type: "input",
        message: "What is your Managers email ?",
        name: "emailManager",
    },
    {
        type: "input",
        message: "what is managers office number",
        name: "officeNumberManager",
    },

],
    internQuestions: [
    {
        type: "input",
        name: "nameIntern",
        message: "Please enter your interns name ?",
    },
    
    {   
        type: "input",
        name: "idIntern",
        message: "Please enter your interns id ?",
    },
    
    {
        type: "input",
        name: "emailIntern",
        message: "Please enter your interns email ?",
    },
    
    {
        type: "input",
        name: "schoolIntern",
        message: "Please enter your interns school ?",
    },

],
    engineerQuestions: [
    {
        type: "input",
        name: "nameEngineer",
        message: "Please enter your Engineerschool ?",
    },
    {
        type: "input",
        name: "idEngineers",
        message: "Please enter your Engineers email ?",
    },
    {
        type: "input",
        name: "githubEngineer",
        message: "Please enter your Engineers github ?",
    },

],
    mainMenuQuestions: [
        {
            type: "list",
            name: "nextMove",
            message: "What do you want to do  next ?",
            choices: ["add another intern", "add another engineer", "finished"]
            
        },
        
]}