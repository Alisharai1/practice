let str= "Il am having fun"
let word=""
// output= Il
//am


// const array= str.split(" ")
for(let i=0;i<str.length;i++){
    if(str[i]==" "){
        console.log(word);
        word=""
        
    }
    else{
        word= word+str[i] //i-1, w-Il
        //i-1
    }
    

}
console.log(word);



