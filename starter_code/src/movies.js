/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const calculateAverageMovieRate = arr => {
    let sum = arr.map(a => a.rate).reduce((avg, val) => {
        return avg + val
    });
    return sum / arr.length;
};
// Iteration 2: Drama movies - Get the average of Drama Movies
const calculateAverageDramaRate = arr => {
    let sum;
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
