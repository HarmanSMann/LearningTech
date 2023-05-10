// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {small = 1, medium, large};

//more optimized if we do const enum
let mySize: Size = Size.medium;
console.log(mySize);