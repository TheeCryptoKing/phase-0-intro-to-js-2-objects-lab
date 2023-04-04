// Write your soluteion in this file!
const employee = {
    [employeeName]: "Josh Benrnard", //key:value
    [employeeAdress]: "123 bumbleras ave",
};

employee;

function updateEmployeeWithKeyAndValue(employee, employeeName) {
    const newEmployee = {...employee};
     return newEmployee;
     //return newEmployee.Object.keys();
     //return newEmployee[employeeAdress];
}
