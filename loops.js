/*
let num = 1;

while(num<=10){
    console.log(num);
    num++;
}
console.log("NEXT LOOP")
do{
    console.log(num);
    num++

}while(num<=20)

console.log("NEXT LOOP");

for(let num = 20; num<=30; num++){
    console.log(num);
}
 


//Factorials
let n = 5;

let ans = 1;

for(let i = 1; i<=n; i++){
    ans = ans * i
}
console.log(ans)


let i = 1;

while(i<=n){
    ans *= i;
    i++;
}

console.log(ans)

*/

//sum of n natural numbers
/*
let N = 10;
let sum = 0;

for(let i =1; i<=N; i++){
    sum +=i;
}
console.log(sum)
*/

//continue

let n = 10;
let ans = 0;

for (let i = 1; i<=n; i++){
    if(i % 2 == 0){
        continue; //skips the even numbers
    }
    ans +=i;
    console.log(i) //evens skipped
}
console.log(ans)