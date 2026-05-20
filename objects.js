let car = {
    name : "Nexon",
    brand : "Tata",
    "engine Model" : "ev, petrol, disel",
    price : 15000000, 
    onRoadPrice(){
        return this.price+290000;
    }
}

console.log(car)
console.log(car["engine Model"])
console.log(car.brand)
console.log(car.onRoadPrice())

car.mileage = 23 ;
console.log(car);

delete car.mileage;
console.log(car)

