'use strict';
let moduuli = "Arrays and functions";
let tehtava = "Assignment 3";
let tehtavananto = `
Write a JavaScript program that prompts the user to enter a series of numbers one by one and extracts and displays only the even numbers from the entered values using the for...of loop.
Define an empty array to store the numbers entered by the user.
Use a loop (e.g., while or do...while) to prompt the user for numbers and add them to the array until the user decides to stop.
Use the for...of loop to iterate over the entered values stored in the array.
Inside the loop, check if the current number is even using the modulo operator %.
If the current number is even, display it on the HTML document.
After the loop completes, display a message indicating the end of the program.

Prompts:
 Enter a number (or 'done' to finish): 5
 Enter a number (or 'done' to finish): 12
 Enter a number (or 'done' to finish): 8
 Enter a number (or 'done' to finish): 3
 Enter a number (or 'done' to finish): 10
 Enter a number (or 'done' to finish): done
Example Output:
 Even Numbers: 12, 8, 10
Prompts:
  Enter a number (or 'done' to finish): 1
  Enter a number (or 'done' to finish): 3
  Enter a number (or 'done' to finish): 5
  Enter a number (or 'done' to finish): 7
  Enter a number (or 'done' to finish): done
Example Output:
  Even Numbers: None
6p
`

const inputArray = [];

let input = "";
while (true) {
    input = prompt("Enter a number or 'done' to finish")
    if (input === "done") {
        break;
    }
    if (input !== "") {
        inputArray.push(Number(input));
    }
}
const evenArray = inputArray.filter((value, index, array) => (value % 2) === 0);


let tuloste = "";
if(inputArray.length !== 0){
tuloste += "Given numbers: " + inputArray + "<br>"
} else {
    tuloste += "Given numbers: none <br>"
}
if(evenArray.length !== 0){
    tuloste += "Even numbers: " + evenArray;
} else  {
    tuloste += "Even numbers: none <br>";
}

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;