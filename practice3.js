// let numm=[12,34,67,89,-3,-6,-2]
// let sum=0;
// let sumEven=0;
// let sumOdd=0;
// for(let i=0;i<numm.length;i++){
//     if(numm[i]<0){
//         sum+=numm[i]

//     }
//      if(numm[i]%2==0){
//         sumEven+=numm[i];
        
//     }

//     else if(numm[i]%2!==0){
//         sumOdd+=numm[i]
//     }

// }
// console.log(sum,sumEven,sumOdd);


// const num=[2,6,8,45,78,56,67]
// const evenarray=[]

// // O/P= odd element
// // 45
// // 67
// // [2,6,8,78,56]
// for(let i=0;i<num.length;i++){
//     if(num[i]%2!==0){
//     console.log(num[i]);
//     }
//     else{
//         evenarray.push(num[i])
        
//     }
// }
// console.log(evenarray);


const arr=[5,8,9,-4,-1,-6,7]
const positiveArray=[]
//print all -ve no
// print list of all +ve no

for(let i=0;i<arr.length;i++){
    if(arr[i]<0)
    {
        console.log(arr[i]);
        
    }
    else{
        positiveArray.push(arr[i])

    }
}

console.log(positiveArray);









 
