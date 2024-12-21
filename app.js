//Write a program to check whether the given input number is divisible by 3 or else show
//a message "Number is by 3". not divisible


// function checkDivisibilityBy3(number) {
//     if (number % 3 === 0) {
//         console.log("Number is divisible by 3");
//     } else {
//         console.log("Number is not divisible by 3");
//     }
// }

// // Example usage
// const inputNumber = parseInt(prompt("Enter a number to check:"), 10);
// if (!isNaN(inputNumber)) {
//     checkDivisibilityBy3(inputNumber);
// } else {
//     console.log("Please enter a valid number.");
// }


// Write a program that checks whether the given input is an even number or an odd number.

// function checkEvenOdd(number) {
//     if (isNaN(number)) {
//         console.log("Please enter a valid number.");
//         return;
//     }

//     if (number % 2 === 0) {
//         console.log(`${number} is an even number.`);
//     } else {
//         console.log(`${number} is an odd number.`);
//     }
// }

// // Example usage
// const input = prompt("Enter a number:"); // Prompt the user for input
// const number = parseInt(input, 10); // Convert input to an integer
// checkEvenOdd(number);


//Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", otherwise output "Too young".

// Variable declaration
// let age = 18;

// If/else statement
// if (age > 17) {
//     console.log("Too young");
// } else {
//     console.log("Old enough");
// }

//Write a program that prompts the user for their name, and then displays a special greeting to that person
// if their name is the same as yours.
// If the name entered by the user is anything other than your name, your code should not produce any output.


// const myName = "shurjeel";

// const userName = prompt("What is your name?");

// if (userName === myName) {
//     console.log(`Hello, ${myName}! It's great to see you!`);
// }


//Write a program to check whether the given input number is divisible by 3 or not
// by using Switch Case statements. Show a message "Number is not divisible by 3" 
//or "Number is divisible by 3".

// const input = prompt("Enter a number:");
// const number = parseInt(input, 10); 


// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else {

//     switch (number % 3) {
//         case 0:
//             console.log("Number is divisible by 3");
//             break;
//         default:
//             console.log("Number is not divisible by 3");
//             break;
//     }
// }


// Write a program that takes a character(number or string) in a variable & checks whether the given 
// input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

const input = prompt("Enter a single character:");

if (input.length !== 1) {
    console.log("Please enter only one character.");
} else {
    const charCode = input.charCodeAt(0); 
   
    if (charCode >= 48 && charCode <= 57) {
        console.log("The input is a number.");
    }

    else if (charCode >= 65 && charCode <= 90) {
        console.log("The input is an uppercase letter.");
    }

    else if (charCode >= 97 && charCode <= 122) {
        console.log("The input is a lowercase letter.");
    }

    else {
        console.log("The input is not a number, uppercase letter, or lowercase letter.");
    }
}




