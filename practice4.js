// ?replace all spaces with dashes
// Input: "hello world js"
// Output: "hello-world-js"

let str="hello world js"
let output=""
for (let i=0;i<str.length;i++){
    if(str[i]!==" "){
        output=output+str[i]
    }
    else{
        output= output+"-"
    }

}console.log(output);

//longest word in array

let arr=['cock','hen','lioness','dog']
let tempVariable =arr[0]
for(let i=1;i<arr.length;i++){
    if(tempVariable.length<arr[i].length){
        tempVariable=arr[i]
    }

} console.log(tempVariable.length);


//reverse the elements in an array
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

let ar=[1,2,3,4]
let temp=ar[0]
for(let i=0,j=ar.length-1;i<ar.length;i++,j--){
    ar[i]= ar[j];
    ar[j]=temp
    
}
console.log(ar);



