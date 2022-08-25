'use strict';
{
    const item = 'smart проектор philips';
    const count = 15;
    const category = 'видео техника';
    const price = 1200;
    
    console.log(item);
    console.log(`общая сумма товара: ${count * price}`);
}

{
    const item = 'телефон SamsungXXX';
    const count = 25;
    const category = 'мобильные телефоны';
    const price = 110;

    console.log(item);
    console.log(`общая сумма товара: ${count * price}`);
}

// Первая задача:
// ✔ Скопируйте файлы из папки предыдущего задания в новую папку в репозитории
// ✔ Добавьте новый блок инструкций
// ✔ Запросите у пользователя "Наименование товара" с помощью функции prompt и запишите в константу
// ✔ Аналогичные действия сделайте с константами "Количество товара", "Категория товара" и "Цена товара"
// ✔ Выведите в консоль тип данных, убедитесь что количество и цена тип данных numbers, если это не так, то поправьте
// ✔ В консоль выведите строку со значением количество товара, наименование и общую сумма 
// пример: "На складе 3 единицы товара "Приставка денди" на сумму 6600 деревянных"
{
    const askAboutGoods = prompt('Как называется товар?');
    console.log(typeof(askAboutGoods));

    let askAboutQuantity = prompt(`Сколько на складе ${askAboutGoods}?`);
    console.log(typeof(askAboutQuantity));
    askAboutQuantity = +askAboutQuantity;
    console.log(typeof(askAboutQuantity));

    const askAboutCategory = prompt('Из какой категории товар?');
    console.log(typeof(askAboutCategory));

    let askAboutPrice = prompt(`Сколько стоит товар?`);
    console.log(typeof(askAboutPrice));
    askAboutPrice = +askAboutPrice;
    console.log(typeof(askAboutPrice));

    const sum = askAboutQuantity * askAboutPrice;

    console.log(`На складе ${askAboutQuantity} единицы товара ${askAboutGoods} на сумму ${sum} деревянных`);
}


