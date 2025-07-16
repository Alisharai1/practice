function alishaSpeak(name,arr){
    console.log(arr)
    console.log(`hello world, bakwas mat kro ${name}!!!`)
    let sum=0;
 for(let i=0;i<arr.length;i++)
 {
    console.log(arr[i]);
    
    sum+=arr[i]; 
 }
 console.log("sum of array is=",sum );


let temp= arr[0];
for(let i=1;i<arr.length;i++){
    if(temp>arr[i]){
        temp=arr[i]
        
    }
}
console.log("the smallest number is:" ,temp);


}

alishaSpeak("Aryan",[3,2,4,56])

