// The two crystal ball problem
// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

// Analysis: 
// An array full of falses until become true
// [false , false, false , true, true ]
// 0                         ^        N  2Crystal Balls

// Linear O(N);
// Binary O(N)
//
// ---- // -----
//
// [          ]
// 0          N  Math.sqrt(N)  [v2]
// --^--^--^--^
// vN + VN
// O(VN)


