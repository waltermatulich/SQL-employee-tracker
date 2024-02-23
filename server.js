const { prompt } = require("inquirer");
require("console.table")
// const DB = require("./db/connection")
const db = require('./db/index.js');
// view all by department(extra credit)
// view all by manager(extra credit)
// update employee(extra credit)
// update employee manager(extra credit)
// view total budget(pending extra credit)
const menu = [{
    type: "list",
    name: "selectedOption",
    message: "Please select one of the following options!",
    choices: [
        "view all employees",
        "add employee",
        "update employee role",
        "view all roles",
        "add role",
        "view all departments",
        "add department",
        "exit"
    ]
}];

// Creating functions

function viewAllEmployees(){
    db.findAllEmployees().then(([rows]) => {
        console.table(rows)
    }).then(() => startMenu())
};

function addEmployee(){
    console.log("2")
    startMenu()
    
};

function updateEmployeeRole(){
    console.log("3")
    startMenu()
};

function viewAllRoles(){
    db.findAllRoles().then(([rows]) => {
        console.table(rows)
    }).then(() => startMenu())
};

function addRole(){
    console.log("5")
    startMenu()
};

function viewAllDepartments(){
    db.findAllDepartments().then(([rows]) => {
        console.table(rows)
    }).then(() => startMenu())
};

function addDepartment(){
    console.log("7")
    startMenu()
};

function startMenu(){
    prompt(menu).then(({selectedOption}) =>{
        switch(selectedOption){
            case "view all employees":
                viewAllEmployees();
                break;
            case "add employee":
                addEmployee();
                break;
            case  "update employee role":
                updateEmployeeRole();
                break;
            case  "view all roles":
                viewAllRoles();
                break;
            case "add role":
                addRole();
                break;
            case "view all departments":
                viewAllDepartments();
                break;
            case "add department":
                addDepartment();
                break;
            default:
                console.log("Leaving application now...");
                process.exit()
        }
    })
}

startMenu()