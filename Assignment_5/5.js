'use strict';
let moduuli = "Arrays and functions";
let tehtava = "Assignment 5";
let tehtavananto = `
Enhance the existing sortArray function to include an additional parameter that defines whether the array should be sorted in ascending or descending order.

Create a function called sortArray that takes two parameters: numbers (an array of numbers) and order (a string indicating the sorting order).
If the order parameter is set to “asc” (ascending), the function should sort the numbers array in ascending order.
If the order parameter is set to “desc” (descending), the function should sort the numbers array in descending order.
Return a new array with the sorted numbers.
Test the function by passing different arrays and sorting orders.

Example Usage:

const numbers = [5, 2, 8, 1, 9];
          
console.log(sortArray(numbers, "asc")); // Output: [1, 2, 5, 8, 9]
console.log(sortArray(numbers, "desc")); // Output: [9, 8, 5, 2, 1]
3p
`

function sortArray(array, order) {
    if (order === "asc") {
        return array.toSorted(((a, b) => a - b));
    } else if (order === "desc") {
        return array.toSorted(((a, b) => b - a));
    } else {
        return null;
    }

}

const array1 = [7, 5, 39, 4, 6, 8, 0, 1, 0];
const array2 = sortArray(array1, "asc");
const array3 = sortArray(array1, "desc");
console.log(array1);
console.log(array2);
console.log(array3);


let tuloste = "Result also in console " + "<br>Array: " + array1 + "<br>Sorted Array: " + array2 + "<br>Descending sort: " + array3;

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;