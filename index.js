// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
  return driver.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver (driver, revenue) {
  let drivers = driversWithRevenueOver(driver, revenue)
  return drivers.map(d => d.name)
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher).map(driver => driver.name)
}
