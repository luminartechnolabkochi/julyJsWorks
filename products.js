

const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", stock: 50 },
    { id: 2, name: "Smartphone", price: 800, category: "Electronics", stock: 100 },
    { id: 3, name: "Headphones", price: 150, category: "Electronics", stock: 200 },
    { id: 4, name: "Keyboard", price: 100, category: "Electronics", stock: 75 },
    { id: 5, name: "Mouse", price: 50, category: "Electronics", stock: 120 },
    { id: 6, name: "Monitor", price: 300, category: "Electronics", stock: 60 },
    { id: 7, name: "Tablet", price: 600, category: "Electronics", stock: 80 },
    { id: 8, name: "Printer", price: 200, category: "Electronics", stock: 30 },
    { id: 9, name: "Camera", price: 500, category: "Electronics", stock: 40 },
    { id: 10, name: "Speaker", price: 120, category: "Electronics", stock: 90 },
    { id: 11, name: "Backpack", price: 70, category: "Accessories", stock: 150 },
    { id: 12, name: "Water Bottle", price: 20, category: "Accessories", stock: 300 },
    { id: 13, name: "Notebook", price: 10, category: "Stationery", stock: 500 },
    { id: 14, name: "Pen", price: 5, category: "Stationery", stock: 1000 },
    { id: 15, name: "Desk Lamp", price: 45, category: "Home", stock: 80 }
];


// 1. How many products are in the "Electronics" category?

var electronicCategoryCount=products.filter(p=>p.category=="Electronics").length

// console.log(electronicCategoryCount);

//2. What is the total stock of all products?

var totalStock=products.reduce((acc,p)=>acc+p.stock,0)


console.log(totalStock,"Total Stock");


//3. Which product has the highest price?
//4. List all products with a price greater than $100.
//5. What is the average price of products in the "Accessories" category?
var accessoriesProduct=products.filter(p=>p.category=="Accessories")

var accessoriesProductTotal=accessoriesProduct.reduce((p1,p2)=>p1.price+p2.price)

// console.log(accessoriesProductTotal/accessoriesProduct.length);


//6. How many products have a stock of less than 100?
//7. Which product has the lowest stock?
//8. What is the total value of all products in stock (price * stock)?

var priceStock=products.map(p=>p.price*p.stock).reduce((p1,p2)=>p1+p2)

console.log(priceStock);

//9. List all products in the "Stationery" category.
//10. Which product has the ID of 10?
// Document Object Model
// react
