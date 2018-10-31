// Code your solution here:


// function driversWithRevenueOver(drivers, revenue) {
//   return drivers.filter(function (driver) {
//     return driver.revenue > revenue;
//   })
// }



// returns an array of all matching drivers ‣
// returns an empty array if there is no match

function driversWithRevenueOver(driver, revenue) {
  return driver.filter(d => d.revenue > revenue)
}


// returns an array of all matching drivers names as string ‣
// returns an empty array if there is no match

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(d => d.name)
}


  // returns an array of all matching drivers ‣
  // returns an empty array if there is no match

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

// returns an array of names for all matching drivers ‣
// returns an empty array if there is no match

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher).map (d => d.name)
}
