const answer = prompt('Сколько фильмов вы уже посмотрели?', '');

let numberOfFilms = answer;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  acotrs: {},
  genres: [],
  privat: false
}

const firstAnswer = prompt('Один из последних просмотренных фильмов?', '');
const firstRating = prompt('На сколько оцените его?', '');

const secondAnswer = prompt('Один из последних просмотренных фильмов?', '');
const secondRating = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstAnswer] = firstRating;
personalMovieDB.movies[secondAnswer] = secondRating;

console.log(personalMovieDB);