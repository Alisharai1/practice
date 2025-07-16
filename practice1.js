function largest(arr1){
    //arr1=[3,7,9,1]
    let temp=arr1[0];
    for (let i = 0; i < arr1.length; i++) {

      if(temp<arr1[i]){
       temp= arr1[i];
      } 
        
    }
    console.log(temp);
    
}
// largest([3,7,9,1])

function oddEven(arr1){
 for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]%2==0){
       console.log("this is even no", arr1[i]); 
    }
    else{
        console.log("this is odd no",arr1[i]);
        
    }

 }    

}

//oddEven([3,19,24,46,27])
function oddEven(arr1){
 for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]%2==0){
       console.log("this is even no", arr1[i]); 
    }
    else{
        console.log("this is odd no",arr1[i]);
        
    }

 }    

}

//oddEven([3,19,24,46,27])


function lengthOfWord(str){
  console.log(str);
  let word=""

  for (let index = 0; index < str.length; index++) {
    
   

    if(str[index]!==' '){
        word+= str[index]
        console.log(str[index],"word is ",word);
        

 
    }
    else{
        console.log(word);
        word= ''
        
    }
    console.log(index);
    
    
  }
  console.log(word);
  
  
}
lengthOfWord("Ay lot")






