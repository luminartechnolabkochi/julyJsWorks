
var arr=[1,2,3,4,5,7]


var arrayLength=arr.length-1 //5

for(let left=0;left<arrayLength;left++){

    let right=left+1

    let result=arr[right] - arr[left]
    if(result!=1){
        console.log(arr[left]+1,"is missing");
        break
        
    }
}
// 
// array 
// []
// 
// Arrowfunction

// gi
