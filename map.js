let map = new Map();

map.set("chn", "SUN TV")
    .set(1, "SK")
    .set(2, "RK")

console.log(map)
console.log(map.get("chn"))
console.log(map.has(2));
map.delete(2)
console.log(map)
// map.clear()
// console.log(map)

console.log(map.size)
console.log(map)
for (key of map.keys()){
    console.log(key)
}
console.log("\n")
for (key of map.values()){
    console.log(key)
}

console.log("\n")

for(key of map){
    console.log(key)
}

