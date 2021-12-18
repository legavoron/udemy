'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastMovies = prompt('Один из последних просмотренных фильмов');
const rating = +prompt('На сколько оцените его');
const lastMovies_2 = prompt('Один из последних просмотренных фильмов');
const rating_2 = +prompt('На сколько оцените его');

personalMovieDB.movies[lastMovies] = rating;
personalMovieDB.movies[lastMovies_2] = rating_2;
console.log(personalMovieDB);

