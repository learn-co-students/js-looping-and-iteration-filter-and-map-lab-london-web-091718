// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( driver => driver.revenue > revenue)
}


function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter( driver => driver.revenue > revenue).map( driver => driver.name)
}

function exactMatch(drivers, object) {
  // console.log("drivers", drivers);
  const key = Object.keys(object)[0]
  return drivers.filter( driver => driver[key] === object[key])
}

function exactMatchToList(drivers, object) {
  // console.log("drivers", drivers);
  const key = Object.keys(object)[0]
  return drivers.filter( driver => driver[key] === object[key]).map( driver => driver.name)
}
