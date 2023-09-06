// ##################
// ### BubbleSort ###
// ##################
/**

[               ]
O   xi =< xi+1  N

[1,3,7,4,2] N
[1,3,4,2,7] N-1
[1,3,2,x,x] N-2
[1,2,3,4,7] N-3
[1,2,3,4,7] N-N+1
 O(n^2)
[       XXX]
0          N
 0---------^ N-1
i i+1

for i..n
for j.. n0-i
  if (arr[i] > arr[j])
        swap (i,j)
*/

// ###################################
// ### Linked Last Data Structures ###
// ###################################
/**
Prime words:
"I said something weird erlier.
I said that JS arrays const a =[]; is not an array. We know have a solid definitions of an array, is it an array(yes someone answer)? And why not?

Next you are going to say HTML isn't a programming language
- Neovim is the only true editor
- Rust is the greatest language
- linux is the only machine you should develop on

So lets go tou our real data Structure
Its hard to call Array a data structure because its so fundamental. Its something that is available in every language except the one in this course because... JS.

So what sucks about and Array?
- Deletion (why?)
- Insertion(why?)
- Its ungrowable(why?)

Lets talk LinkedList
- Singly Linked
- Doubly Linked

(A) -> (B) -> (C) -> (D)

SingleLinkedList
Node<T>
val: T
next?:Node<T>


DoubleLinkedList
Node<T>
val: T
next?:Node<T>
prev?: Node<T>

Heap allocated objects

(A) -> (B) <-> (C) <-> (D) <-
 ^      ^
 -->(F)--

setting .nexts
setting .previews

Next:    Previous
A -> F   F <- B
F -> B   A <- F
O(1)


Delete (C)

B  = C.Previous
D = C.next

D.Previous = C.previous
C.Previous = C.next = null
ret C.Value


They are so foundational to programming concepts when it comes to DSA. Understanding them will help you with trees, with graphs, etc.
*/


// #############
// ### Queue ###
// #############
//
/**
 
Specific implemenation of a Linked List
Firs in First Out (FIFO)

(A) -> (B) -> (C) -> (D) --> E
  ^-(H)-^
 ^                    ^
 Head               Tail

To add (E): to the carnival it is necessary to update 
tail to (E)  and (D) to (E) 2 steps operation.

this.tail.next = E
this.tail = E

To pop up (A):

h = head;
head = head.next
h.next = null;
return h.val

O(1)


 */
