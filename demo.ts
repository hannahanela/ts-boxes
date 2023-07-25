// learns that age is a number
let age: number = 42;

// or: provide type explicitly
let myAge: string;

// invalid methods throw errors
age.split("");

myAge = "forty-Two";

myAge.split("");

// redefining to invalid value throws an error
age = "42";




///////////////////////////////////////////////////////////////////////////////

const foods = ["carrots", "chicken"];

foods.push("tacos");

foods.push(23);

const anyValue = ["string", 25];

anyValue.push("string2", 28);

let strings: string[] = [];

strings.push("string");



////////////////////////////////////////////////////////////////////////////////

let movieData = {
    title: "The Godfather",
    year: 1972,
};

// ok!
movieData.year = 2022;

// error!
movieData.year = "nope";

// error!
movieData.director = "Coppola";


const person: Record<string, string> = {};
//the angle bracket syntax is called a generic

person.firstName = "John";

person.age = 12;





////////////////////////////////////////////////////////////////////////////////

//               arg type   return type
function isSeven(n: number): string {
    if (n === 7) return "THAT IS INDEED 7!";

    return "NOPE, NOT SEVEN :( ";
}

// error!
isSeven();

// error!
isSeven(1, 2);

// error!
isSeven("one");

function hi(): void {
    console.log("HI"); // doesn't return anything!
}





///////////////////////////////////////////////////////////////////////////////

class Cat {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance(dance: string = "tango") {
        return `${this.name} dances the ${dance}`;
    }
}

let fluffy = new Cat("Fluffy");
let sparkles = new Cat(8);




/////////////////////////////////////////////////////////////////////////////////

interface UserInterface {
    username: string;
    age: number;
}

let jane: UserInterface = {
    username: "jane",
    age: 42,
};

//error!
let bob: UserInterface = {
    username: "bob",
};

interface UserInterface2 {
    username: string;
    age?: number;
}

let janeDoe: UserInterface2 = {
    username: "jane",
};






///////////////////////////////////////////////////////////////////////////////

function showUserInfo(user: UserInterface): void {
    console.log(`${user.username} is ${user.age} ${user.height}`);
}
function makeRandoUser(name: string): UserInterface {
    return {
        username: name,
        age: Math.floor(Math.random() * 100),
    };
}

interface StudentInterface {
    name: string;
    cohort: string;
}

interface InstructorInterface {
    name: string;
    salary: number;
}

function getUpperName(person: { name: string; }): string {
    return person.name.toUpperCase();
}



//////////////////////////////////////////////////////////////////////////////

let x: number | string;

// x = 42;
// x = "hello";

x.split();

let y: any;

y = 42;
y = "hello";







////////////////////////////////////////////////////////////////////////////

const h1 = document.querySelector("h1") as HTMLElement;

function myFunc(s: string): string | null {
    if (s === "nope") return null;
    return "ok!";
}

let a = myFunc("good");
a.slice();                  // error!

let b = myFunc("nope")!;    // note the "!"
b.slice();




///////////////////////////////////////////////////////////////////////////////

function maybe(): string | void {
    if (Math.random() < 0.5) return "ok";
}

let k = maybe();
k.split("");

if (typeof k === "string") {
    // can use string methods here!
    k.toLowerCase();
}



///////////////////////////////////////////////////////////////////////////////

async function myAsyncFunc1(): number {
    return 42;
}

async function myAsyncFunc2(): Promise<number> {
    return 42;
}

































////////////////////////////////////////////////////////////////////////////
//variable to get rid of unused errors

jane;
bob;
janeDoe;

let sammy: StudentInterface = {
    name: "sammy",
    cohort: "one"
};

let Devarsh: InstructorInterface = {
    name: "Devarsh",
    salary: 100000000
};

showUserInfo(jane);

makeRandoUser("alex");

getUpperName(jane);
x.toLowerCase();
y;
myAsyncFunc1();
myAsyncFunc2();
fluffy.dance();