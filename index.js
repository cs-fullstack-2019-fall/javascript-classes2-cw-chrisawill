
// ### Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased.
// Create three different methods to change each attribute.
// Outside of the class create two different Movie objects, assign values to each object, and print them to the console.

class Movie
{
    constructor(movieName,rating, yearReleased)
    {
        this.movieName = movieName;
        this.rating = rating;
        this.yearRealeased = yearReleased;
    }
    changeMovieName(veiwing)
    {
        console.log(this.movieName = veiwing)
    }

    changeRating(rate)
    {
        console.log(this.rating = rate)
    }

    changeYearReleased(releaseDate)
    {
        console.log(this.yearRealeased = releaseDate)
    }

}

let film = new Movie("Bridge to Terebithia","87% Fresh","2007");
console.log(film);
let userCinema = new Movie("","","");
console.log(userCinema);
var title = prompt("What is your favorite movie?");
userCinema.changeMovieName(title);
var percent = prompt("What would you rate it?");
userCinema.changeRating(percent);
var showing = prompt("When did it come out?");
userCinema.changeYearReleased(showing)
//Kenn said to ignore second question

//     ### Exercise 2
// Create a class Product that represents a product sold online. A product has a price, quantity and name.

//     The class should have:
//     1. A constructor to hold the values.
// 2. A method ```printProduct()``` that prints a product in the following form: ```Banana, price 1.1, amount 13```
