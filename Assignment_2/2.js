'use strict';
let moduuli = "Arrays and functions";
let tehtava = "Assignment 2";
let tehtavananto = `
Write a JavaScript program that focuses on various array operations using the push(), includes(), pop(), and numerical sorting functions. Your program should include the following requirements:

Create an empty array called numbers.
Prompt the user to enter five numbers, one by one, and add each entered number to the numbers array using the push() method.
Display the contents of the numbers array on the HTML document or in the console.
Prompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.
Display a message indicating whether the entered number is found or not found in the numbers array.

Remove the last number from the numbers array using the pop() method.
Display the updated numbers array on the HTML document or in the console.

Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.
Display the sorted numbers array on the HTML document or in the console.

Example Output:

Enter Number 1: 10
Enter Number 2: 5
Enter Number 3: 7
Enter Number 4: 3
Enter Number 5: 9
          
Numbers: [10, 5, 7, 3, 9]
          
Enter a Number to Search: 7
Number 7 is found in the array.
          
Updated Numbers: [10, 5, 7, 3]
          
Sorted Numbers: [3, 5, 7, 10]
3p
`
const tuloste = document.querySelector('#tuloste');

const numbers = [];
for (let i = 0; i < 5; i++) {
    numbers[i] = Number(prompt(`Give number ${i + 1}`));
}


const numberElem1 = document.createElement("div");
numberElem1.innerHTML = "Numbers: " + numbers.toString();
tuloste.appendChild(numberElem1);


let testNumber = prompt("Give number to find in array")
const testElem = document.createElement("div");
if (numbers.includes(testNumber)) {
    testElem.innerText = `${testNumber} is in the numbers array.`;
} else {
    testElem.innerText = `${testNumber} is not the numbers array.`;
}
tuloste.appendChild(testElem);


const numberElem2 = document.createElement("div");
numbers.pop();
numberElem2.innerHTML = "Updated numbers: "+numbers.toString();
tuloste.appendChild(numberElem2);

const numberElem3 = document.createElement("div");
numbers.sort();
numberElem3.innerHTML = "Sorted numbers: "+numbers.toString();
tuloste.appendChild(numberElem3);

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
