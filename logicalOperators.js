let age = "23",
gender = "M";

if(age>= 21 || age>=18 && gender == "F"){
    console.log("Eligible")
}else{
    console.log("Not eligible")
}

console.log(null || 0 || undefined); //only undefined is true here therfore it is printed