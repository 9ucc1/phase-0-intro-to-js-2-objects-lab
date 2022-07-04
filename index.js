// Write your solution in this file!
let employee = {name: "Jimbo", streetAddress: "somewhere, somewhere"}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {...employee}
    updatedEmployee[key] = value
    return updatedEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const deletedEmployee = {...employee}
    delete deletedEmployee[key]
    return deletedEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}