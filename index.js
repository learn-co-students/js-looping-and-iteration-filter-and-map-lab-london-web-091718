// Code your solution here:
function driversWithRevenueOver(drivers, rev){
  return drivers.filter( d => d.revenue > rev );
}

function driverNamesWithRevenueOver(drivers, rev){
  return drivers.filter( d => d.revenue > rev).map( d => d.name );
}

function exactMatch(drivers, obj){
  return drivers.filter(function(driver){
    return obj[Object.keys(obj)[0]] == driver[Object.keys(obj)[0]];
  });
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers,obj).map( d => d.name);
}
