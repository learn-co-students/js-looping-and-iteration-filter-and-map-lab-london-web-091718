function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, obj){
  return drivers.filter(driver => driver[Object.keys(obj)] == obj[Object.keys(obj)])
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(driver => driver.name)
}
