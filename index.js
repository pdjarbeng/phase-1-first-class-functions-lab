// Code your solution in this file!

let arrray = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(array){
    return [ array[0], array[1]]
}

const returnLastTwoDrivers = function(array){
    const length = array.length 
    return [ array[length-2], array[length-1]]   //4-1 and 4-2
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
    return function(value) {
        return fare * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function (drivers, driversfunction) {
    return driversfunction(drivers)
}





























// function receivesAFunction(callbackfunction) {
//     callbackfunction()
// }


// function returnsANamedFunction() {
//     return function greeting(){
//         console.log("hello")
//     }   
// }


// function returnsAnAnonymousFunction() {
//     return function(){
//     console.log('hi')
//     }
// }

