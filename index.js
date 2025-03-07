function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee, [key]: value };
    return updatedEmployee;
}
const employee ={
    name: "sam",
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = {...employee};
    delete clonedEmployee[key];
    return clonedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}