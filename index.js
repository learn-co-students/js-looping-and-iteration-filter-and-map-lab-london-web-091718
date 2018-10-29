// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(val => val["revenue"] > revenue)

}

function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.filter(val => val["revenue"] > revenue).map(val => val.name)

}

function exactMatch(extendedDrivers, obj){
  return extendedDrivers.filter(val => val.name == obj.name || val.revenue == obj.revenue)

}

function exactMatchToList(extendedDrivers, obj){

  return exactMatch(extendedDrivers, obj).map(val => val.name)

}
