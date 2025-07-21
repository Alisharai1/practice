
// let str="mom"

// function palindrome(str){

// for(let i=0,j=str.length-1;i<j;i++,j--){
//     if(str[i]!=str[j]){
//         console.log(false);
//         return;
        
//     }

// }
// console.log(true);

// }

// palindrome(str);


// reverse string 
// let str="hello Alisha"
// let word=""
// for(let i=str.length-1;i>=0;i--){
//     word=word+str[i]
    
// }
// console.log(word);



// count vowels in string and replace vowels by Z
 //let str= "Javascript"
//  str= str.toLowerCase()
//  let output=""
//  //let count=0;
//  let vowels=['a','e','i','o','u']
//  for(let i=0;i<str.length;i++){

//     if(vowels.includes(str[i])){
//         output=output+"Z"
        

//     }
//     else{
//         output=output+str[i]

//     }


    // if(vowels. includes(str[i]))
    // {
    //     count++;
    // }
    
//  }
//  console.log("the count of vowels in the string is", count);
// console.log(output);

// length of longest word

let str="I love programmming"
let word=""
const wordArray=[]

for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        word=word+str[i]
    }
    else{
        //word=word+" "
        wordArray.push(word)
    
        word=""
        
    }

    }
    wordArray.push(word)
    console.log(wordArray);
    
    

    

    
    
    



 
 


