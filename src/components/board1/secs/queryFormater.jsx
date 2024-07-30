import {lvl1Data} from './dropdown.jsx'

function findSmallestNumber(arr) {
  return Math.min(...arr.map(Number));
}

function findLargestNumber(arr) {
  return Math.max(...arr.map(Number));
}

export default function queryFormater(arr) {
  if (arr.length === 1) {
    return `eq,${arr[0]}`;
    // eq , 1;
  } else if (
    arr.length === lvl1Data[0].lists.length - 1 ||
    arr.includes("50")
  ) {
    return `bt,(${findSmallestNumber(arr)}%2C${findLargestNumber(arr)})`;
    // bt,(1%2C50)
  } else {
    const sortedArray = arr.sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });
    return `in,(${sortedArray.join(",")})`;
    // in,(1, 4, 19, 50)
  }
}