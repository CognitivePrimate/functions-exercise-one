// function greetClass() {
//     console.log("Hello class");
// }

// greetClass();

// function getRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1
// }

// const randomNum1 = getRandomNumber();
// const randomNum2 = getRandomNumber();
// console.log(randomNum1);
// console.log(randomNum2);


// // function expressions
// const getRandomNumberExp = function() {
//     return Math.floor(Math.random() *100) + 1;
// }
// const randomNum3 = getRandomNumberExp();
// console.log(randomNum3);


// // arrow functions
// // will assume that single line code with no {} is a return statement
// const getRandomNumberArrow = () => Math.floor(Math.random() *100) + 1;
// const randomNum4 = getRandomNumberArrow();
// console.log(randomNum4);

// const greetPerson = () => {
//     console.log("Hello, friend.");
//     return "friend greeted";
// }
// greetPerson();


// // using parameters
// function getRandomNumberParam(num) {
//     return Math.floor(Math.random() * num) + 1;
// }
// console.log(getRandomNumberParam(5000));

// // default parameters ---- if i don't want to pass an argument it will default to the set parameter
// function getRandomNumberParam2(num = 100) {
//     return Math.floor(Math.random() * num) + 1;
// }

// getRandomNumberParam2(num = 100);
// getRandomNumberParam2(20);

// greeting based on time of day -- return based on time & name



// function greetingDay(name, timeOfDay) {
//     if (timeOfDay < 12){
//         alert(`Good morning, ${name}!`)
//     } else if (timeOfDay > 12 && timeOfDay < 19) {
//         alert(`Good day, ${name}!`)
//     } else {
//         alert(`Good night, ${name}!`)
//     }
// }

// greetingDay("Derek", 11);


// function getAreaOfCirle(r) {
//     if (r >= 0) {
//         console.log(Math.PI * (r * r));
//     }
// }
// getAreaOfCirle(5);


// function getCircumferenceOfCircle(r) {
//     console.log(2 * Math.PI * r);
// }
// getCircumferenceOfCircle(5);


// function getAreaOfSquare(side) {
//     console.log(side * side);
// }
// getAreaOfSquare(5);

function getAreaOfTriangle(base, height) {
    console.log((base * height) /2);
}

getAreaOfTriangle(4, 8);

