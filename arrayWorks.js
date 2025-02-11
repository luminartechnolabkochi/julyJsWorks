// Array,
// define []
// is order preserved? yes
// is duplicates allowed? yes
// mutable ?yes
// is there any length limit? no 

// indexing
// class Array{
        // attributes length
        // methods
        // push() add an elemnt end of the array
        // pop() removes the element from end
        // unshift()add the elemenet beginig of array 
        // shift() remove the element from begining
        // includes(obj) returns true if object exist false otherwise
        // indexOf(obj) Returns the index of the first occurrence of a value in an array,
        // slice(start,end)Returns a copy of a section of an array
// }
var colors=["red","green","blue","orange"]

// console.log(colors.length);


// console.log(colors.includes("red"));

console.log(colors.indexOf("cyan"))


// console.log(colors.slice(1,3))

var newColo=colors.splice(0,0,"grey")


console.log(newColo);

// arrowfunctions => lambda functions

