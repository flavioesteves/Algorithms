
// #############################
// ### Arrays vs Linked List ###
// #############################

/*
Array
[      ]
0      N

// #################
// ### ArrayList ###
// #################
/
[2, , , ]
0  . .   3
   ...

Length 1
Capacity of 3

get(idx)
  if idx >= Length
    throw "";

  push(val:T)
  pop(): T }|undefined

    
When a element is pushed and as result increases the capacity,
then a new array is created 


[2, x1, x2,x3, ... ]
0                  N

[2,3,5]

Length 3
Capacity 3

Enqueue
you need to create a new array to increase the length to be able to shift,
the the elements position and insert the new element in the desire position

Dequeue
Same process of Enqueue but instead is unshift




// ###################
// ### ArrayBuffer ###
// ###################

[ null [      ] null ]
0      ^      ^      N
       !      !
       h      t



to add to the head add h+1 to the head
to add to the tail add t+1

this.tail%len

Ring Buffer



Q&A

get O(1)
push/pop O(1)
un/shift O(N)

this is a an arraylist

*/





