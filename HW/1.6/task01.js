'use strict';

const getPow = () => {
    for (let a = 2; a <= 10; a++) {
        console.log('---------------'); 
        for (let m = 2; m <= 10; m++) {
            console.log(`${a} ** ${m} = ${a ** m}`);
        }
    }
};

getPow();