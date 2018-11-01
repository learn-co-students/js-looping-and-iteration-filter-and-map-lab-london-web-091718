// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
  const driversWithRevOver = driversWithRevenueOver(drivers, revenue);
  const names = driversWithRevOver.map(driver => driver.name);
  return names
}

function exactMatch(drivers, obj){
  return drivers.filter(function(driver){
    return obj[Object.keys(obj)[0]] == driver[Object.keys(obj)[0]];
  });
}

function exactMatchToList(drivers, obj){
  const matches = exactMatch(drivers, obj);
  const names = matches.map(match => match.name);
  return names
}
