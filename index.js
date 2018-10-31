// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
	return (highRevenue = driver.filter(el => el.revenue > revenue));
}

function driverNamesWithRevenueOver(driver, revenue) {
	return driversWithRevenueOver(driver, revenue).map(el => el.name);
}

function exactMatch(driver, object) {
	return driver.filter(d => d[Object.keys(object)[0]] === Object.values(object)[0]);
}

function exactMatchToList(driver, object) {
	return exactMatch(driver, object).map(d => d.name)
}


