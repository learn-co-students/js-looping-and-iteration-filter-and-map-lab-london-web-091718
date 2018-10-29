// Code your solution here:
function driversWithRevenueOver(list,amount){
  let result = []
  for (person of list)
    if (person['revenue'] > amount){
      result.push(person)
    }
  return result
}

function driverNamesWithRevenueOver(drivers,amount){
  let result = []
  for (person of drivers){
    if (person['revenue'] > amount){
      result.push(person['name'])
    }
  }
  return result
}


function exactMatch(driverlist, object){
  return driverlist.filter(function(driver){
    let same = false

    for (const stat in object) {
      same = (driver[stat] === object[stat])
    }
return same
  }
)
}

function exactMatchToList(driverlist,object){
  return exactMatch(driverlist,object).map(driver => driver['name'])
}
