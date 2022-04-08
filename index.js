const employee = {
    name: "Alex",
    streetAddress: "Nairobi 00100"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let copyEmployee = {...employee}
    delete copyEmployee[key]
    return copyEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}