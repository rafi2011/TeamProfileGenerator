class Employee {
    constructor(id, name, email) {
        this.name = name ;
        this.id = id;
        this.email = email;
    }
// name

    getName() {return this.name;}

// id
    getId() {return this.id;}

// email

    getEmail() {return this.email;}

// getRole
    getRole() {return 'Employee';}


}

module.exports = Employee;









