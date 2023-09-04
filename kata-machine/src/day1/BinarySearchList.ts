//Pseudo Code
//search(array, low, high) needle
//[  M  ]
//O     N
//middle = [low + (high - low)/2]
//value = array[middle]
// if value = needle
// return true or returnm index
// else if value > middle
//      low = middle +1,
//  else 
//    high = middle
//
//do while (low < high)
// return false or return -1

export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;
  do {
    const midPoint = Math.floor(low + (high - low) / 2)
    const value = haystack[midPoint];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = midPoint;
    } else {
      low = midPoint + 1;
    }

  } while (low < high);
  return false;
}
