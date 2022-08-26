'use strict';

// Третья задача:
// Напишите функцию, которая принимает строку и возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"


let str = 'hello, world!';
const getReversed = () => {
    return str.split('').reverse().join('');
};

console.log(getReversed());