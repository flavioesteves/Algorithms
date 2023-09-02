//Big O
//-------------------
// O(1)
// O(LogN)
// O(N)
// O(NlogN)
// O(N^2)
// O(2^N)
// O(N!)
// -------------------


// Examples:
// O(N)
// TIP: Look for loops
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
}


// O(N^2)
function sum_char_codes2(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
}


// O(N)
function sum_char_codes3(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i);
    //Capital E
    if (charCode === 69) {
      return sum;
    }
    sum += charCode;
  }
  return sum;
}


//O(N^2)
function sum_char_codes4(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      sum += n.charCodeAt(i);
    }
  }
  return sum;
}


//O(N^3)
function sum_char_codes5(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {
        sum += n.charCodeAt(i);
      }
    }
  }
  return sum;
}

// O(N Lon N) --> Quicksort
// O(Log N) --> Binary search trees
// O(sqrt(N)) --> Square Event

// Other ways to measure the complexit of algorhitms but the easiest one is the "Upper Bound"

//Space the Final Frontier
// React Example:
// return <Component ...props />
