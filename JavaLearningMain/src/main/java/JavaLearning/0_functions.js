// function sayGreeting(greeting){
//     console.log(greeting);
// }

// sayGreeting("Hello"); // undefined
// sayGreeting("Hola");
// sayGreeting("Bonjour");

function reverseString(str){
    return str.split("").reverse().join("");
}

var reversed = reverseString("Hello");
console.log(reversed); // olleH