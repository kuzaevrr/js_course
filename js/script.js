"use strict";


const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const   a = prompt('Один из последних просомтренных фильмов?',''),
        b = prompt('На сколько оцените его?',''),
        c = prompt('Один из последних просомтренных фильмов?',''),
        d = prompt('На сколько оцените его?','');

        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;

console.log(personalMovieDB);