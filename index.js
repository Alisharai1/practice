// function main(){
//     console.log("hello world!!!");

//     let arr=[1,2,3,4,5];
//     for(let i=0;i<arr.length;i++){
//         // index 0 Number 1
//         // index 1 Number 2
//         // index 2 Number 3
//         console.log(`index ${i} Number = ${arr[i]}`);
//     }

//     // Number = 1

//     const func = (element,index)=> console.log(` index ${index} Number = ${element}`)
    


//     function func1(a,b){

//         console.log( `index ${a} Number = ${b}`)

//     }
//     func1(1, 3)
//       arr.forEach(func1);

// }

// const a = (arg1, arg2, arg3) => {
//     console.log("I love kid", arg1, arg2, arg3)
// }



// a(1, 2, 3)

// main();

// // [a()]

// const main = ()=>{
//   const arr1=[];
//   arr1.push(5,10,"Alisha");

//   function func2(x){
//     console.log(x)

//   }

//   const func3=(z)=>{
//     console.log(z)
//   }

  
//   arr1.forEach(func2)
//    arr1.forEach(func3)
//    arr1.forEach((z)=>{
//     console.log(z)
//   })
// }

// main()

function main3(){
    const a=[2,4]
    a.push(6,7,8,9);
    a.push(11);
    a.pop();
    a.forEach((c)=>{
        console.log(c)
    })
    a.pop()
    a.forEach((c,idx)=>{
        console.log(c*idx)
    })
    a.push(35,57,24,59,27)
    a.forEach((element)=>{
        //console.log(element)
        if(element%2!==0){
            console.log(element)
        }

    })

}

main3()
// use for loop, for each, and filter
//print all element of array
// print all odd element and even element
// print all teh string whose length is >2
// print all the element which is divisible by 10