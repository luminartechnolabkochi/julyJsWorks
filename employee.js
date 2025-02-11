

// create an object employee with attributes id,name,department,salary

var product={
    id:"sku123",
    title:"oreo",
    price:50
}

// add a new attribute category:"food"

// product["category"]="food"

product.category="food"

if("price" in product){

    console.log("exist");
    
}
else{

    console.log("not exist");
    
}

// add an attribute offer with value 5 if offer exist else add offer with value 10


// if("offer" in product){
//     product.offer=5
// }
// else{
//     product.offer=10
// }
// console.log(product);


// if offer exist update offer as current offer + 10 else add offer of 20

if("offer" in product){
    product.offer+=10
}

else{
    product.offer=20
}

console.log(product);
