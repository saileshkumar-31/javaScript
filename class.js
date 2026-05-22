class User {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  display() {
    console.log("Name:", this.#name);
    console.log("Age:", this.#age);
  }

  //getter method
  get name() {
    return "Name:" + this.#name;
  }

  get age(){
    return "Age:" + this.#age;
  }

  //setter method
  set name(name) {
    if ((name = "SK")) {
      this.#name = "Sailesh Kumar";
    } else {
      this.#name = name;
    }
  }

  set age(age){
    this.#age = age;
  }
}

let sk = new User("SK", 25);
console.log(sk.name);
console.log(sk.age);
