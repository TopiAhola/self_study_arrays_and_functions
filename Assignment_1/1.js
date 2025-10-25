'use strict';
let moduuli = "Arrays and functions";
let tehtava = "Assignment 1";
let tehtavananto = `
Write a JavaScript program that focuses on the basic concepts of arrays. Your program should include the following requirements:
Create an array called fruits and initialize it with the following elements: “apple”, “banana”, “orange”, “ grape”, “kiwi”.
Display the contents of the fruits array in the console.
Calculate and display the length of the fruits array.
Access and display the element at index 2 in the fruits array in the console.
Access and display the last element in the fruits array using the length property in the console.
Create an empty array called vegetables.
Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array using the push() method.
Display the contents of the vegetables array in the console.
Calculate and display the length of the vegetables array.
Example Output:

  Fruits: ["apple", "banana", "orange", "grape", "kiwi"]
  Length of Fruits: 5
  Element at Index 2: "orange"
  Last Element of Fruits: "kiwi"
  Vegetables: ["carrot", "broccoli", "cabbage"]
  Length of Vegetables: 3
3p
`

const fruits = ["Omena","Banaani","Tomaatti","Päärynä","Luumu"];
console.log(fruits);
console.log("Fruits length: "+fruits.length);
console.log("Element 2: "+fruits[2]);
console.log("Last Element: "+fruits[fruits.length-1]);

const vegetables = [];
for (let i = 0; i < 3; i++) {
    let v = prompt("Give a vegetable")
    vegetables.push(v);
}
console.log(vegetables);
console.log("Vegetables length: "+vegetables.length);






const tuloste = "Results in console";

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;