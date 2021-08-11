/**
 * Function passed as a callback argument is invoked on every element of given array
 */
const forEachFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

/**
 * Map method works similar to forEach but returns modified version of an array
 */
const mapFn = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  };
  return newArray;
};

const entriesFn = (array) => {};

const filterFn = (array, callback) => {};

const reduceFn = (array, callback, inital) => {};

const everyFn = (array, callback) => {};

const someFn = (array, callback) => {};