// for loop
// for (initilaization; condition; increment/decrement) {
//     // code block to be executed
// }
for (let a =1; a<=20; a+=2) {
    console.log(`counter Num: ${a}`);
}
// while loop
// while (condition) {
//     // code block to be executed
// }
let b =1;
while (b<=20) {
    console.log(`Counting numbers: ${b}`)
    b+=2;
}

// do while loop
let num = 10;

do {
    console.log(`Number: ${num}`);
    num+=2     
}while (num<= 100)

// For...of loop

const fruits =["Apple","Banana","Oranges","Mangos"];

for (const fruit of fruits){
    console.log (fruit);
}

const greetings = "Hello";

for (const char of greetings){
    console.log(char)
}

// for.. in loop
const person ={
    firstName : "David",
    lastName : "Njenga",
    age : 24,
    isStudent : true
};

for (const propertiy in person){
    // console.log(`Values ${propertiy}: ${person[propertiy]}`)
    console.log(person[propertiy])
}