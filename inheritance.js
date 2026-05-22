class Animal{
    legs;
    tail;
    constructor(legs, tail){
        this.legs = legs;
        this.tail = tail;
    }
    display(){
        console.log("Animal Display")
        console.log(this.legs);
        console.log(this.tail);
    }
}

class Human extends Animal{
    nationality;
    constructor(legs, tail, nationality){
        super(legs, tail)
        this.nationality = nationality;
    }
    display(){
        console.log("Human Display");
        console.log(this.legs);
        console.log(this.tail);
        console.log(this.nationality);
    }//over rides animal class display
}

let sk = new Human(2, false, "Indian");
console.log(sk);
sk.display();