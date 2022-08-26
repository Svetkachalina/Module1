'use strict';

// Четвертая задача:
// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
// Порядок применения скидок должен соблюдаться

const calculate = (totalAmount, quantity, promoCode) => {
    if (quantity > 10) {
        const discount1 = totalAmount * 0.03;
        return totalAmount - discount1;  
        
    } else if (totalAmount > 30000) {
        const discount2 = (totalAmount - 30000) * 0.15;
        return totalAmount - discount2;

    } else if (promoCode === "METHED") {
        const  discount3 = totalAmount * 0.1;
        return totalAmount - discount3;

    } else if (promoCode === "G3H2Z1" && (totalAmount - discount1 - discount2 - discount3) > 2000) {
        return totalAmount - 500;
    }
};

console.log('calculate: ', calculate(3000, 8, "METHED"));

