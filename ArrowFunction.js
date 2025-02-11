
function sample(){

    return "this a normal function"
}


// syntax

// (p1,p2,..)=>return value

// (p1,p2)=>{
    // stmt1 
    // stm2
    // return value 
// }


var addNumbvers=(num1,num2)=>num1+num2

console.log(addNumbvers(100,200));

var squares=(num)=>num**2

console.log(squares(4));

// var maxTwo=(num1,num2)=>num1>num2?num1:num2

// console.log(maxTwo(100,200));


var maxTwo=(num1,num2)=>{
    if(num1>num2){
        return num1
    }
    else{
        return num2
    }
}


// console.log(sample()); //error

console.log(arrowFunction());



var arrowFunction=()=>"this is an arrowfunction"



// hoisting function ,var