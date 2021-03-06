/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

/*while (true) {

    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    if(numberOfFilms != '' && numberOfFilms  != null  ) 
        break;

}*/

function start() {

    while (numberOfFilms == '' || numberOfFilms  == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();
/*do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    if(numberOfFilms != '' && numberOfFilms  != null ) 
        break;

} while(true);*/

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    for (let i = 1; i <= 2; i++ ){
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if ( a != '' && b != '' && a != null && b != null && a.length < 50 )    
            personalMovieDB.movies[a] = b;
        else i--;
    } 
}

rememberMyFilms();

function detectPersonalLevel() {

    if(personalMovieDB.count < 10)
        alert('Просмотрено довольно мало фильмов')
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) 
        alert('Вы классический зритель')
    else if (personalMovieDB.count >= 30) 
        alert('Вы киноман')
    else 
        alert('Произошла ошибка');
}

detectPersonalLevel();

function showMyDB() {
    
    if(personalMovieDB.privat == false) console.log(personalMovieDB);
}

showMyDB();

function writeYourGenres() {

    for (let i = 1; i <= 3; i++ ) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(a);
    }
}

writeYourGenres();