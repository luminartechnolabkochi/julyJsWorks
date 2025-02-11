var text="ABCCDAA"

var wc={}

for(let ch of text){
    // ch =A
    if(ch in wc){
        console.log(`first recursive character is ${ch}`);
        break
        
    }
    else{

        wc[ch]=1
    }
}