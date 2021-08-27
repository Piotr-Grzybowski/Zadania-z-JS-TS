/**
* Function that given length of array will return an array of random chunks lengths between 4 and 7
* For example for arrayLength equal to 10 one of possible result is [4, 6]
* It means that array should be splitted into two chunks. First 4 elements long and other 6 elements long
 */
function findChunksLength(arrayLength) {
  let i = 0;
  let chunksLengths = [];
  while (i < arrayLength) {
    let chunkLength = Math.floor(Math.random() * 4 + 4); // finds random number between 4 and 7
    i += chunkLength;
    chunksLengths.push(chunkLength);
    // if random numbers of chunks lengths is higher then array length we have to start loop again
    if (i > arrayLength) {
      chunksLengths = [];
      i = 0;
    }
  }
  return chunksLengths;
}
/**
* Function takes an array and using above findsChunksLength function aggregate array into chunks from 4 to 7 elements long
* It returns new array that contains chunks of original input array
 */
function aggregateArrayIntoChunks(array) {
  const chunksLengths = findChunksLength(array.length);
  const arrayCopy = [...array];
  for (let element of chunksLengths) {
    let chunk = arrayCopy.splice(0, element);
    arrayCopy.push(chunk);
  }
  return arrayCopy;
}


const alphabet = "abcdefghijklmnoprstuwxyz".split("");

aggregateArrayIntoChunks(alphabet);

