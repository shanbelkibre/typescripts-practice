

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let person = new Person("shanbel kibre", 22);


console.log(person.name)

let a: number = 24;
let b: string = '2';

console.log(a / (parseInt(b)));


// Array with only one type

let myarray: number[];
myarray = [1, 2, 3]

// array with mixed types 
let arraymixed: (number | string)[]
arraymixed = [1, 2, "rex"]

// array with either types of arrays of same type
let arrayeither: string[] | number[];
arrayeither = ["rex", "22"]


// Type Narrowing


function processId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
}


