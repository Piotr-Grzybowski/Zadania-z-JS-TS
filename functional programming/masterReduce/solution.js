/**
 * To make this function behave similar to map after every iteration we have to update accumulator
 * It should return recent content and also result of callback from current iteration
 */
function mapFn(array, callback) {
  return array.reduce((acc, element, index, array) => {
    return [...acc, callback(element, index, array)];
  }, []);
}
/**
 * Similar to the above function but this time if callback is truthy we add current element to the accumulator
 */
function filterFn(array, callback) {
  return array.reduce((acc, element, index, array) => {
    if (callback(element, index, array)) acc.push(element);
    return acc;
  }, []);
}
/**
 * Initial value in reduce is set to true if result of callback invoked on any element of an array will be false
 * accumulator value (acc) will be set to false and returned after last iteration
 */
function everyFn(array, callback) {
  return array.reduce((acc, element, index, array) => {
    if (!callback(element, index, array)) acc = false;
    return acc;
  }, true);
}
/**
 * Opposite to above function initial value in reduce is set to false if result of any callback will be truthy
 * then accumulator value (acc) will be set to true and returned after last iteration
 */
function someFn(array, callback) {
  return array.reduce((acc, element, index, array) => {
    if (callback(element, index, array)) acc = true;
    return acc;
  }, false);
}