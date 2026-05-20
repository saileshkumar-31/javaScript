let a ={
    name : "SK"
}
function User(){
    this.name = a,
    this.age = function(){
        return 25;
    }
}
let sk = new User("sk");
console.log(sk.name)
console.log (sk.age());

console.log("\n")

function Add(){
    this.a = 10,
    this.b = 12,
    this.add = function(c){
        return this.a + this.b + c;
    }
}

let sum = new Add();
console.log(sum.add(8));