// spread operator=> ...
var expenses2k24=[1000,1200,3000,2400]

var expenses2k25=[1000,2000]

var allExepenses=[...expenses2k24,...expenses2k25]

console.log(allExepenses);


var hithaFavtFoods=["biriyani","alfham","noodles"]

var parthanFavtFoods=["friedrice","pastha","dosa"]

var alanFvtFoods=["tea",...hithaFavtFoods,...parthanFavtFoods,"lime"]

// console.log(alanFvtFoods);


// spread operator with object
var student1={course:"django",batch:"pyjuly2k24",faculty:"anshya",name:"alan",age:22}

var student2={...student1,name:"sreehari",age:23}

console.log(student1);
console.log(student2);


var person={name:"vipin",age:23,department:"hr"}

var {name}=person
console.log(name);

var {department}=person

console.log(department);



// var location={state:"kerala",district:"ekm"}

// var data={...person,...location}  //{name:"vipin",age:23,department:"hr",state:"kerala",district:"ekm"}


// console.log(data);



function bmi({height,weight}){

    let result=weight/(height/100)**2
    console.log(result);
}

var data={height:165,weight:75}

bmi(data)

// DocumentObjectModel