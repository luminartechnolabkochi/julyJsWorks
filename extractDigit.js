

var number=1234


while(number!=0){

    let lastDigit=number%10

    console.log(lastDigit);

    number=Math.floor(number/10)
    
}