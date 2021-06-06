"use strict";


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания
let numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
while(true){
    
    if(numberOfFilms == '' || numberOfFilms.lenght > 50){
        numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
    }else{break;}
}

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if(personalMovieDB.count <= 10){
    console.log('Просмотрено довольно мало фильмов');
}else if(personalMovieDB.count > 10 || personalMovieDB.count <= 30){
    console.log('Вы классический зритель');
}else if(personalMovieDB.count > 30){
    console.log('Вы киноман');
}


for(let i =0; i<2; i++){
    let a = prompt('Один из последних просомтренных фильмов?','');
        
    while(true){
        if( a === '' || a.length >50){
            a = prompt('Один из последних просомтренных фильмов?','');
        }else{break;}
    }

    let b = prompt('На сколько оцените его?','');

    while(true){
        if( b === '' || b.length >50){
            b = prompt('На сколько оцените его?','');
        }else{break;}
    }

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);


