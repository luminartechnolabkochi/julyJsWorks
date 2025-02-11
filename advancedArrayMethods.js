
// class Array{
    // map
// }


var arr=[10,20,30,40,21,22,23,24,100,200]


arr.sort((n1,n2)=>n1-n2)

arr.sort((n1,n2)=>n2-n1)


var names=["ram","gopal","ramgopal","jhon","jhonsmith"]

var smName=names.reduce((name1,name2)=>name1.length<name2.length?name1:name2)

console.log(smName);


var upperCaseNames=names.map((name)=>name.toUpperCase())

console.log(upperCaseNames);


names.sort()

console.log(names.reverse());

// map()
// filter()
// reduce()
// sort()

//object => dictionary

var numbers=[10,100,20,200,30,300,40,400]
//            0   1  2  3   4  5   6  7

// odd_pos_numbers=[100,200,300,400]

// reverse_odd_pos_number=[400,300,200,100]
// [10,400,20,300,30,200,40,100]



