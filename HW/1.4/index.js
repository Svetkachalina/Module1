'use strict';

// Задачи:
// Первая задача:
// В прошлом задании вы от пользователя получали количество товара и цену.
// ✔ С помощью конструкции if (else) убедитесь, что пользователь ввёл число
// ✔ Если число, то всё должно работать как и в прошлом задании
// ✔ Если пользователь вёл не число, то вывести сообщение "Вы ввели некорректные данные"
// ✔ Других сообщений в консоли быть не должно.

{
    let askAboutQuantity = +prompt('Сколько на складе товара?');

    if (typeof(askAboutQuantity) === 'number') {
        console.log(askAboutQuantity);
    } else {
        console.log('Вы ввели некорректные данные');
    }
}
