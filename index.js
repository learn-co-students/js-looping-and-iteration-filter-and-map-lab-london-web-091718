// Code your solution here:
function driversWithRevenueOver(list, value){
  return list.filter(driver => driver.revenue > value);
}

function driverNamesWithRevenueOver(drivers, value){
  return driversWithRevenueOver(drivers, value).map(driver => {return driver.name});
}

function exactMatch (drivers, matcher) {
  return drivers.filter(driver => {
    let matches = false;
    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, value){
  return exactMatch(drivers, value).map(driver => {return driver.name});
}
