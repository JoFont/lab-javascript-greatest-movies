'use strict';

const rewire = require('rewire');
const helperList = rewire('./../src/movies.js');

const helperNames = [
  'calculateAverageMovieRate',
  'calculateAverageDramaRate',
  'orderByYear',
  'countSpielbergDramaMovies',
  'turnHoursToMinutes',
  'bestYearAvg',
  'orderAlphabetically'
];

for (let name of helperNames) {
  try {
    const helper = helperList.__get__(name);
    global[name] = helper;
  } catch (error) {
    // Helper not defined in the movies file
  }
}
