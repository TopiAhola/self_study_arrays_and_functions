'use strict';
let moduuli = "Arrays and functions";
let tehtava = "Assignment 4";
let tehtavananto = `
Create a function called sortArray that accepts an array of numbers as a parameter and returns a new array with the numbers sorted in ascending order.
No need to prompt for the numbers. Use a hard coded array. Use console.log to print the original array and the sorted array.
2p
`
function sortArray(array) {
    return array.toSorted(((a,b) => a-b));
}


const array1 = [7,5,39,4,6,8,0,1,0];
const array2 = sortArray(array1);
console.log(array1);
console.log(array2);


let tuloste = "Result also in console " +"<br>Array: "+array1+"<br>Sorted Array: "+array2;


//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;