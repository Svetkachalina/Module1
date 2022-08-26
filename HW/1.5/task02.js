'use strict';

// Вторая задача:
// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// Пример:  "привет Мир" => "Привет мир"



let str = 'hello WORlD!';
const getUpperCase = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

console.log(getUpperCase(str));