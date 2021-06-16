// "use strict";

// let num = 20;


// function showFirstMessage(text){
//     console.log(text);
//     let num = 40;
//     console.log(num);
// }

// showFirstMessage("Привет) как дела?");
// console.log(num);



// // function calc(a, b){
// //     return(a+b);
// // }

// // console.log(calc(5,6));



// function ret(){
//     let num = 50;
//     return num;
// }

// const anatherNum = ret();
// console.log(anatherNum);

// const logger = function(){
//     console.log("Hello!");
// };

// logger();



// const calc = (a, b) => {
//     console.log(a+b+'asda');
//     return a + b;
// };

// /////////////////////////////////////////

// const str = "Text";
// const arr = [1,2,3,4,5,31,21];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("q"));

// const logg = 'Hello world!';
// console.log(logg.slice(6));
// console.log(logg.substring(6));
// console.log(logg.substr(6, 3));

// const number = 12.49;
// console.log(Math.round(number));

// const test = "12.49px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// function first(){

//     setTimeout(function(){
//         console.log(1);
//     },500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS("JavaScript", function(){
//     console.log("Я прошел этот урок");
// });
////////////////////////////////////////////////////////////////////////////

// const options = {
//     name: 'test',
//     widht: 1024, 
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };

// console.log(options);

// delete options.name;

// console.log(options);
// let counter =0;

// for(let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let keyObj in options[key]){
//             console.log(`Свойство ${keyObj} имеет значения ${options[key][keyObj]}`);
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значения ${options[key]}`);
//     }
//     counter++;
// }

// console.log(counter);

// console.log(Object.keys(options).length);
// options.makeTest();

// const {border, gb} = options.colors;
// console.log(border); 

const arr = [5,2,34,4,7,6];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b){
    return a-b;
}
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("","");
// const product = str.split(", "); 
// product.sort();
// console.log(product.join("; "));
// // arr.pop();//Удаление последного элекмента массива
// arr.push(10);
// console.log(arr);

// for(let i=0 ; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }

