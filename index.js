// Your code here
const employee = {
    firstName: "",
    lastName: "",
    title: "",
    payPerHour: "",
    timeInEvents: "",
    timeOutEvents: ""  
}

function createEmployeeRecord([firstName,familyName,title,payPerHour]){
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []  
    }
}

function createEmployeeRecords(array){
   const employeeArray = []
    for (const element of array){
       employeeArray.push(createEmployeeRecord(element))
    }
    return employeeArray
}

function createTimeInEvent(record, string){
   const obj = {
        type: "TimeIn",
        date : string.split(" ")[0],
        hour : parseInt(string.slice(-4),10),
    }
    record.timeInEvents.push(obj)
    return record
}

function createTimeOutEvent(record, string){
   const obj = {
        type: "TimeOut",
        date : string.split(" ")[0],
        hour : parseInt(string.slice(-4),10),
    }
    record.timeOutEvents.push(obj)
    return record
}

function hoursWorkedOnDate(record,date){
    let clockIn = 0
    for (let element of record.timeInEvents){
        if (element.date === date){
            clockIn = element.hour
        }
    }  
    let clockOut = 0
    for (let element of record.timeOutEvents){
        if (element.date === date){
            clockOut = element.hour
        }
    }
    
    return (clockOut-clockIn)/100
}

function wagesEarnedOnDate(record,date){
    return hoursWorkedOnDate(record,date)*record.payPerHour
}

function allWagesFor(record){
  let totalWage = 0
    for (let element of record.timeInEvents){
        let wage = wagesEarnedOnDate(record,element.date)
         totalWage += wage
    }
    return totalWage
}

function calculatePayroll(record){
    let totalWage = 0
    for (let element of record){
        let wage = allWagesFor(element)
         totalWage += wage
    }
    return totalWage
}