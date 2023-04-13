
const employee = { name: "Josh Benrnard",  streetAdress: "123 bumberas ave",};


function updateEmployeeWithKeyAndValue(employee, key, value) { //indestructively 
    const newEmployee = {...employee}; // clones object 
    newEmployee[key] = value; //allows input from clone to alter key and value 
    console.log(newEmployee); //prints new object 
    return newEmployee; //returns new altered object 
}

/* #1 every time you read the description of the error of the message, as well as the error itself
after you read it the 1st time, read it again
after that time if anything you dont understand pertaining to what you read, description or error then google that term 
format: Javascript + question + example
Example: JavaScript what is a function examples
skim through first 3 links*/


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value; //destuctively i guess holds no regard for original object 
    return employee; // returns altered original function 
}

function deleteFromEmployeeByKey(employee, key) { //indestructively 
    const newEmployee = {...employee}; //cloned object
    delete newEmployee[key];//delete simply removes from cloned object 
    console.log(newEmployee); 
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; //destructively delete key 
    return employee;
}