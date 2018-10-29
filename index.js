// Code your solution here:
function driversWithRevenueOver(driverObjects, revenue) {
  return driverObjects.filter(function(dObject) {
    return dObject.revenue > revenue
  });
}

 function driverNamesWithRevenueOver(driverObjects, revenue) {
   let filterArray = driversWithRevenueOver(driverObjects, revenue);
    const arrayOfDriverNames = filterArray.map(function(dObject) {
     return dObject.name;
   })
   return arrayOfDriverNames;
 }

 function exactMatch(driverObjects, jsObject) {
   const found = []
   driverObjects.filter(function(dObject) {
     for (const key in jsObject) {
       if (dObject[key] === jsObject[key]) {
         found.push(dObject)
       }
     }
   })
   return found;
 }

 //{ revenue: 200 })
 function exactMatchToList(driverObjects, jsObject) {
   const dOs = exactMatch(driverObjects, jsObject);
   return dOs.map(function(dObject) {
     return dObject.name
   })
 }
