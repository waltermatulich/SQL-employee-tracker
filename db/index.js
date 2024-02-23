const connection = require('./connection.js');
class DB {
    constructor(connection){
        this.connection = connection
    }
    findAllEmployees(){
        return this.connection.promise().query("SELECT * FROM employee")
    }

    addEmployee(employee){
        return this.connection.promise().query("", employee)
    }

    updateEmployeeRole(employeeRole){
        return this.connection.promise().query("", employeeRole)
    }

    findAllRoles(){
        return this.connection.promise().query("SELECT * FROM role")
    }

    addRoles(role_id){
        return this.connection.promise().query("", role_id)
    }

    findAllDepartments(){
        return this.connection.promise().query("SELECT * FROM department")
    }

    addDepartment(add_dept){
        return this.connection.promise().query("", add_dept)
    }
}

module.exports = new DB(connection)