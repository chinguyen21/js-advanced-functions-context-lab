/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployeeRecords = (arr) => arr.map((employee) => createEmployeeRecord(employee));


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createTimeInEvent(date_stamp) {
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date_stamp.split(" ")[1]),
    date: date_stamp.split(" ")[0]
  })
  return this;
}



function createTimeOutEvent(date_stamp) {
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date_stamp.split(" ")[1]),
    date: date_stamp.split(" ")[0]
  })
  return this;
}


const hoursWorkedOnDate = function (date_stamp) {
  let time_in = this.timeInEvents.find((obj) => obj.date === date_stamp.split(" ")[0])
  let time_out = this.timeOutEvents.find((obj) => obj.date === date_stamp.split(" ")[0])
  return (time_out.hour - time_in.hour)/100
}


const wagesEarnedOnDate = function (date) {
    return this.payPerHour * hoursWorkedOnDate.bind(this)(date)
}


const findEmployeeByFirstName = (srcArray, firstName) => srcArray.find(employee => employee.firstName === firstName)

const calculatePayroll = (employees) => employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);

