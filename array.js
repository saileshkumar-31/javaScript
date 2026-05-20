let add = new Array();
add = [ "carrot", "beetroot" , {name: "potato", color: "brown"}];

console.log(add);


//adding element 
//at end
add.push("cabbage");
console.log(add);
// at start
add.unshift("tomato");
console.log(add)


//removing element
//at end 
add.pop()
console.log(add);
//at start 
add.shift()
console.log(add);

//splice
let a = [1,2,3,4,5,6,7,8,9]
a.splice(2,2);//3 & 4 is removed
console.log(a)

//slice
let b = a.slice(1,4)
console.log(b)


//multidimensional array 
let c = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(c);
console.log(c[0][0])