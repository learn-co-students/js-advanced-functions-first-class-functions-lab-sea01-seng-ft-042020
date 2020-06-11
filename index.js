const returnFirstTwoDrivers = function(drivers) {return [drivers[0], drivers[1]]}

const returnLastTwoDrivers = function(drivers) {
    let x = drivers.length
    return [drivers[x-2], drivers[x-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fair) {return fair * num}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}