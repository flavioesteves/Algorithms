//
// Recursion: The simplest way to think of recursion is a function that calls itself
//            until the problem is solved. This usually involves what is referred to
//            as a "base case". A base case is the point in which the problem is solved at.
//


// Two steps recursion:
// 1. Base Case
// 2. Recurse
//  - pre: n+
//  - recursive: ...
//  - post:


// The simplest example
function foo(n: number): number {
  //base case

  if (n === 1) {
    return 1;
  }

  // We shall Recursive!
  return n + foo(n - 1);
}


// Path Finding: Base Case

// MazeSolver
// Base Case: 
//  1. It's a wall
//  2. Off the map
//  3. It's the end
//  4. If we have seen it
//
//  Check in all directions: Top, Right, Bottom, Left from each square
let maze: string[] = [
  "#########",
  "#       #",
  "#$.######",
];

