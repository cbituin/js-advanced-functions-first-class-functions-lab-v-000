// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = (arr) => {
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (x, y) => {
  return x*y;
};

const fareDoubler = createFareMultiplier.bind(this, 2);

const fareTripler = createFareMultiplier.bind(this, 3);


const selectDifferentDrivers = (arr, func) => {
  
};