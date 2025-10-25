'use strict';
let moduuli = "Arrays and functions";
let tehtava = "Assignment 6";
let tehtavananto = `
Write a program that allows users to track and rate their favorite movies. The program should prompt the user to enter the details of each movie, including the title and rating on a scale of 1 to 5. The program should store the user input in an array of objects using object literals. Once all the movie ratings have been entered, the program should sort the movies based on their ratings and determine the highest-rated movie. Finally, it should display the sorted list of movies and the highest-rated movie on the HTML document.
Use object literals to represent each movie, with properties such as title and rating.
Prompt the user to enter the number of movies they want to rate.
Use a loop to gather user input for each movie, including the title and rating. Store the movie details in an array of objects.
Sort the array of movie objects based on the ratings, from highest to lowest.
Determine the highest-rated movie by accessing the first element of the sorted array.
Display the sorted list of movies and the highest-rated movie on the HTML document.
6p
`
//Number of movies
let number = parseInt((prompt("Enter the number of movies")), 10);
if (isNaN(number)) {
    number = 0;
}

//Fill array
const movieArray = [];
for (let i = 0; i < number; i++) {
    let movie = {
        title: null,
        rating: 0,
    }
    movie.title = prompt(`Give title of movie ${i + 1}: `);
    movie.rating = prompt(`Give rating of movie ${i + 1}: `);
    movieArray.push(movie);
}
//Sort
movieArray.sort((a, b) => b.rating - a.rating);

//heading
const movies = document.querySelector('#movies');
let heading = document.createElement("h3");
heading.innerText = "Movies by rating:";
movies.appendChild(heading);

//add elements
for (const movie of movieArray) {
    let movieElem = document.createElement("div");
    movieElem.innerHTML = "Title: " + movie.title + "<br>Rating: " + movie.rating;
    movieElem.setAttribute("style", "margin:10px")
    movies.appendChild(movieElem);
}

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
