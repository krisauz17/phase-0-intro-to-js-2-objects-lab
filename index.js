// Write your solution in this file!

const employee = {
    name:'Krishenndu',
    streetAddress:'10-12 Bresbane Street.'
};
employee;

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value})
    //employee.name='John';
    //employee.streetAddress='4 Lawson Street.';
}
employee;
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
    //const newEmployee = {...employee};
    //newEmployee[name]= 'Adam';
    //newEmployee[streetAddress]= '15 Pages Road.';
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    //const newObj = {...employee};
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}