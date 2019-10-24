/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const calculateAverageMovieRate = arr => {
    const sum = arr.map(a => a.rate).reduce((avg, val) => {
        return avg + val
    });
    return sum / arr.length;
};


// Iteration 2: Drama movies - Get the average of Drama Movies
const calculateAverageDramaRate = arr => {
    const drama = arr.filter(obj => obj.genre.includes("Drama"));
    return drama.length > 0 ? calculateAverageMovieRate(drama) : 0;
};


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByYear = arr => {
    const sorted = arr.sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
    });
    return sorted;
};


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const countSpielbergDramaMovies = arr => {
    return arr.filter(a => {
        return a.genre.includes("Drama") && a.director === "Steven Spielberg";
    }).length;
};


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
    return arr.map(a => a.title).sort().slice(0, 20);
};


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
    let t =  arr.map(a => {
        let time;

        if (a.duration.includes("min") && a.duration.includes("h")) { 
            const hToMin = parseInt(a.duration.split(" ").shift()) * 60;
            time = parseInt(a.duration.split(" ").pop()) + hToMin;
        } else {
            time = a.duration.includes("h") ? parseInt(a.duration) * 60 : parseInt(a.duration);
        } 
        return {...a, duration: time};
    });
    return t;  
};


// BONUS Iteration: Best yearly rate average - Best yearly rate average
// const bestYearAvg = arr => {
//     const test = orderByYear(arr).reduce((acc, obj) => {
//         let temp;
//         if(typeof acc === "undefined") acc = {year: obj.year, rate: obj.rate};
//         if(obj.year === acc.year && obj.rate > acc.rate) {
//             acc.rate = obj.rate;
//         } 
//     });

//     console.log(test);
// }