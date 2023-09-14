//const a = [] // technically isn't an array


//Node
const a = new ArrayBuffer(6);
const a8 = new Uint8Array(a);
a[0] = 45;
//45
a8[2] = 45;
//45
const a16 = new Uint16Array(a);
a16[2] = 0x4545;
//17733
a16[2] = 0x45;



