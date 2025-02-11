

// def funtion_name(param1,param2):
    // function defnition
    // return value


// fuction call by using funtion_name(arg1,arg2) 


// function functionName(p1,p2,,){
        // function defnition
        // return value
// }


function add(num1,num2){
    return num1+num2
}

var addResult=add(400,400)

// console.log(addResult);


function cube(num){

    return num**3
}


// console.log(cube(4));


// create a function maxTwo with two params num1, num2 return maximum Number

function maxNumber(num1,num2){

   return num1>num2?num1:num2
}

console.log(maxNumber(10,20));

// create a funtion lastDigitMax(num1,num2)  lastDigitMax(879,127) 


function lastDigitMax(num1,num2){

    return num1%10>num2%10 ?num1 :num2
}


// create a function factorial(num) return factorial of that number
// 

function factorial(num){
    let fact=1
    
    for(let i=1;i<=num;i++){
        
        fact=fact*i
    }
    
    return fact
}

console.log(factorial(0));






