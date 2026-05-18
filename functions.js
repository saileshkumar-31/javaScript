
function add (a,b){
    console.log(a+b)

}

add(3,3)


let c = 12;

function even (c){
    if(c%2 == 0 ){
        return "even";
    }else{
        return "odd";
    }
}

console.log(even(c))


function operation(op, d, e){
    return op(e, d);
}

let addd = (d, e)=> d + e;

function sub ( d, e){
    return d -  e;
}

console.log(operation(sub, 3, 4));


