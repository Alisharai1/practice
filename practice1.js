function largest(arr1) {
    //arr1=[3,7,9,1]
    let temp = arr1[0];
    for (let i = 0; i < arr1.length; i++) {

        if (temp < arr1[i]) {
            temp = arr1[i];
        }

    }
    console.log(temp);

}
// largest([3,7,9,1])

function oddEven(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 == 0) {
            console.log("this is even no", arr1[i]);
        }
        else {
            console.log("this is odd no", arr1[i]);

        }

    }

}

//oddEven([3,19,24,46,27])
function oddEven(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 == 0) {
            console.log("this is even no", arr1[i]);
        }
        else {
            console.log("this is odd no", arr1[i]);

        }

    }

}

//oddEven([3,19,24,46,27])


function lengthOfWord(str) {
    console.log(str);
    let word = ""

    for (let index = 0; index < str.length; index++) {



        if (str[index] !== ' ') {
            word += str[index]
            console.log(str[index], "word is ", word);



        }
        else {
            console.log(word);
            word = ''

        }
        console.log(index);


    }
    console.log(word);


}
// lengthOfWord("Ay lot")


function myFunctiion(arr1) {

    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);

    }

}
// myFunctiion(["Alisha", "Ajay", "Ritu", "Kittu"]);

function sumOfArray(arr) {
    let sum = "";
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index] + " "
    }
    console.log(sum);

}
// alishaajayritukittu
//alisha ajay ritu 
// sumOfArray(["Alisha","Ajay","Ritu","Kittu"])




function lengthOfEachWord(arr1) {

    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i], "==", arr1[i].length);



        if (arr1[i].length % 2 !== 0) {
            // console.log(arr1[i]);

            console.log(arr1[i], "== odd");

        }
        else {
            console.log(arr1[i], "== even");

        }
    }

}
// lengthOfEachWord(["Alisha", "Ajay", "Ritu", "Kittu"])

function myFunction1(str){

    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='A'){
           str[i]='X'
            
        }
    }
    console.log(str);
    
    
}

// myFunction1("Alisha")


function replaceVowel(str){
    str=str.toLowerCase()

    let result=""
       for(let i=0;i<str.length;i++){

    //console.log(str[i]);
    if(str[i]=='a'|| str[i]=='e'||str[i]=='i'|| str[i]=='o'||str[i]=='u' )
        {
            result+="!"
    }
    else{
        result=result+str[i];
    }
        
       }
       console.log(result);
       


}

// replaceVowel("I am a girl")





let backpack = ["pencil", "notebook", "eraser", "sharpener"];
// Show the last item

console.log(backpack[backpack.length-1]);
console.log(backpack.length);


let fruits = ["apple", "banana", "cherry"];
// Change "banana" to "grape"

for(let i=0;i<fruits.length;i++){
    if(fruits[i]=="banana"){
        fruits[i]="grape"

    }
    

}
// console.log(fruits);

let animals1 = ["dog", "cat"];
let animals2 = ["lion", "tiger"];
// Join both lists into one
 console.log(animals1.concat(animals2));


 let name = "Emily";
// Does it include "e"? (true or false)
 function doesStringHaveE(name){

    for(let i=0;i<name.length;i++){
        console.log(name[i]);
        
        if(name[i]=='E'){
            return true;
            
        }
       

    }
     return false;


 }

 const output= doesStringHaveE("AjEy")
 console.log(output);
  
 


