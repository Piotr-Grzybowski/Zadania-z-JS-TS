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

/**
 * Function entries return iterator object with method next that lets us to access next element
 * Every element has format {done: false/true, value: [index, value]}
 * Value of done shows us if iteration is finished or not
 * Value field has index and value that was in used array under that index
 */
const entriesFn = (array) => {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray.push([index, array[index]]);
  }

  const iterator = newArray[Symbol.iterator]();

  return iterator;
};

//TODO
//Create solution for entriesFn using generator

const filterFn = (array, callback) => {};

const reduceFn = (array, callback, inital) => {};

const everyFn = (array, callback) => {};

const someFn = (array, callback) => {};