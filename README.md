## Algorithms course
[https://frontendmasters.com/courses/algorithms](https://frontendmasters.com/courses/algorithms)


# Module 01 - Introduction
01. Introduction
02. Big O Time Complexity
    * Growth is with respect to the input
    * Constants are dropped
    * Worst case is usually the way we measure
    * Upper Bound
03. Arrays Data Structure
    * They are fixes size, continiguos memory chunks
    * That means you cannot grow it
    * There is no "insertAt" or push or pop.Doesn't mean you can't write those though
04. Array Q&A

# Module 02 - Search
05.  Linear Search & Kata Setup 
    *  a [x0=v? , , , ,  ] search (arr, v)
    * What's the Big O? O(N)
    * Important Concepts:
        - Grown is with respect to the input
        - Constants are dropped
        - Worst case is usually way we measure
    
    * Setup Kata:
        - Github repo: [https://github.com/ThePrimeagen/kata-machine](https://github.com/ThePrimeagen/kata-machine)
        - gh repo clone ThePrimeagen/kata-machine
        - cd kata-machine
        - yarn install
        - yarn generate
        - Test: npx jest NAME_OF_ALGORITHM
06. Binary Search Algorithms
    * What's the Big O?(LogN)
    *  If the input halves at each step, its likely O(LogN) or O(NlogN)
07. Pseudo Code Binary Search
08. The two crystal ball problem
09. Implementing Two Crystal Balls

# Module 03 - Sort
10. Bubble Sort
11. Implementing Bubble Sort
12. Linked List Data Structures
13. Linked List Complexity
    * Lets talk time /scape complexity
    - Prepend/Append
    - Insertion in the middle
    - Deletion from ends
    - Deletion in the middle
    - Get head / tail
    - Get in general
14. Queue
    * enqueue
    * deque
    * peek
15. Implementing a Queue
16. Queue Q&A
17. Stack
    * push
    * pop
    * peek
18. Implementing a Stack

# Module 04 - Arrays
19. Arrays vs Linked List
    * Usability
    * Time
    * Space
20. ArrayList
21. ArrayBuffer
22. Data Structures Q&A
    * Lets fins out under the hood what type of data structure is being used with const a = [].
    * Script array-test.js
    * In JS it a ArrayList and not an array

# Module 05 - Recursion
23. Recursion
24. Path Finding: Base Case
25. Path Finding: Recursive Case
--26. Recursion Q&A


# Module 06 - Quick Sort
# Module 07 - Doubly Linked List
# Module 08 - Trees
# Module 09 - Tree Search
# Module 10 - Heap
# Module 11 - Graphs
# Module 12 - Maps & LRU
# Module 13 - Wrapping Up 

# Notes

## Algorithms (The A In DSA)
    - When applicable. Pretend that JS actually has arrays.
    - Only have access to the .length property of an array. So won't go full C neckbeard and require length to be passed in

### Queue (DSA)
    - We enteruing a world of DSA where constraints make things fast
    - You will notice pretty much from hrere on out that makes a lot of these datastructures fast is the lack of features.

