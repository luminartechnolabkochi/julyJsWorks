var arr=[10,100,20,200,30,300,40,400]
//            0   1  2  3   4  5   6   7
var left=1

var arrayLength=arr.length-1

var right=arrayLength%2==0?arrayLength-1:arrayLength


while(left<right){

    temp=arr[left]

    arr[left]=arr[right]

    arr[right]=temp

    // [arr[left],arr[right]]=[arr[right],arr[left]]

    left+=2

    right-=2
}

console.log(arr);
