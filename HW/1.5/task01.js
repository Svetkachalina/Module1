'use strict';

// Первая задача:
// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 64 рубля.


    const euro = +prompt('Сумма в евро');

    const getInRoubles = () => {
           let rouble = (euro * 1.2) * 64;
            return rouble;
        };

        console.log(getInRoubles());
        
    
