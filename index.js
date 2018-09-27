console.log("Hello World!")
const x = 10;
//x = 2; uh-uh
let y = 6;
y = 7;

let name = "Philos";
let age = "120";
let wantsPotatoChips = "true";

let favThings = ['potato chips', 28, true];
let backwards = favThings.reverse();
let sliced = favThings.slice(0,2);
favThings.pop();
favThings.pop();
favThings.push("Honey BBQ Crisps");

//if/case statements
let door = "Knock knock";
if (door === "Knock knock") {
    console.log("Who's there")
} else {
    console.log("Awkward silence")
}

let value = 2;
switch (value) {
    case 1: 
        console.log("One");
        break;
    case 2: 
        console.log("Two");
        break;
    default: 
        console.log("None");
}

//for/while loops
let introCourses = [125, 173, 225, 233, 241, 374]
for (let i = 0; i < introCourses.length; i++) { 
  console.log(introCourses[i])
}

let count = 1;
while (count < 10){
    console.log("Count " + count)
    count += 1;
}
console.log("Done counting")

//func
function sayHello(name) {
    return "Hello " + name;
}
sayHello("Philos")
sayHello("Steven")