

var sourceWord="CHICKEN"

var targetWord="HENN"

var wordCount={}

for(let ch of sourceWord){

    ch in wordCount?wordCount[ch]+=1:wordCount[ch]=1
}

var isKWD=true

for(let ch of targetWord){

    // ch=H
    if(ch in wordCount && wordCount[ch]>0){

        wordCount[ch]-=1
    }
    else{
        isKWD=false
        break
    }
}

console.log(isKWD);

// array of objects
// DOM
// REACT
