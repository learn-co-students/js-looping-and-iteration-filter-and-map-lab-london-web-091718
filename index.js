// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) => drivers.filter ( driver => driver.revenue > revenue )

const driverNamesWithRevenueOver = (drivers, revenue) => driversWithRevenueOver(drivers, revenue).map( driver => driver.name)

const exactMatch = (drivers, keyValuePair) => drivers.filter ( driver => driver.hasOwnProperty(Object.keys(keyValuePair)[0]) && driver[Object.keys(keyValuePair)[0]] === Object.values(keyValuePair)[0] )

const exactMatchToList = (drivers, element) => exactMatch(drivers, element).map(driver => driver.name)
