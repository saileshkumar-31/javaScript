let set = new Set();

set.add("code io")
    .add("logic io")
    .add("sk io")
    .add("logicio")

console.log(set);
set.delete("logicio");
console.log(set)

console.log(set.has("sk io"))

console.log(set.size)
// set.clear();
// console.log(set)

for (s of set ){
    console.log(s);
}