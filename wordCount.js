

var words=["hello","hai","hello","hai","hai"]

var wordCount={}//{"hello":2,"hai":3}

for(let w of words){
    if(w in wordCount){
        wordCount[w]+=1
    }
    else{
        wordCount[w]=1
    }
}

console.log(wordCount);


// ABCCDAA
// first recursive character