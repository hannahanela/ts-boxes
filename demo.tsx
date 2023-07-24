// learns that age is a number
let age = 42;

// or: provide type explicitly
let myAge: string;

// invalid methods throw errors
age.split("");

myAge = "forty-Two";

myAge.split("");

// redefining to invalid value throws an error
age = "42";


const foods = ["carrots", "chicken"];

foods.push("tacos");

foods.push(23);

const anyValue = ["string", 25];

anyValue.push("string2", 28);

let strings: string[] = [];

strings.push(23, "string");


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


function showUserInfo(user: UserInterface): void {
    console.log(`${user.username} is ${user.age}`);
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

let x: number | string;

x = 42;
x = "hello";

let y: any;

y = 42;
y = "hello";