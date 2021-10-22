/**
 * Function passed as a callback argument is invoked on every element of given array
 */
const forEachFn = (array, callback) => {
  checkIfArray(array);
  checkIfCallback(callback);

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

/**
 * Map() iterates over the array calling callback functions on every element
 * It returns new array with modified values
 */
const mapFn = (array, callback) => {
  checkIfArray(array);
  checkIfCallback(callback);

  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
};

/**
 * Method entries() return iterator object with method next that lets us to access next element
 * Every element has format {done: false/true, value: [index, value]}
 * Value of done shows us if iteration is finished or not
 * Value field has index and value that was in used array under that index
 */
const entriesFn = array => {
  checkIfArray(array);

  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray.push([index, array[index]]);
  }

  return newArray[Symbol.iterator]();
};

/**
* Solution of method entries() but using generator instead Symbol.iterator method
 */
function* entriesFnGen(array) {
  checkIfArray(array);

  for (let i = 0; i < array.length; i++) yield [i, array[i]];
}

/**
 * Filter() method works similar to map
 * The difference is that it returns array only with values that has truthy result called with callback
 */
const filterFn = (array, callback) => {
  checkIfArray(array);
  checkIfCallback(callback);

  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
};

/**
 * Reduce() method iterates over the array elements the same way like map or filter
 * The difference is that it has accumulator value that keeps value of callbacks between iterations
 * At the end functions returns accumulator
 */
const reduceFn = (array, callback, initial) => {
  checkIfArray(array);
  checkIfCallback(callback);

  let accumulator = initial || array[0];

  for (let i = initial ? 0 : 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};

/**
* The every() method tests whether all elements in the array pass the test implemented by the provided function.
* It returns a Boolean value.
 */
const everyFn = (array, callback) => {
  checkIfArray(array);
  checkIfCallback(callback);

  for (let i = 0; i< array.length; i++) {
    if (!callback(array[i], i, array)) return false;
  }
  return true;
};

/**
 * The some() method tests whether at least one element in the array passes the test implemented by the provided function.
 * It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
 */
const someFn = (array, callback) => {
  checkIfArray(array);
  checkIfCallback(callback);

  for (let i = 0; i< array.length; i++) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
};

/**
* Checks if given argument is an array
 */
const checkIfArray = array => {
  if (!Array.isArray(array)) throw new Error("Argument should be an array");
}

/**
 * Checks if given argument is a function
 */
const checkIfCallback = callback => {
  if (typeof callback !== "function") throw new Error("Callback argument should be a function");
}