import { add, capitalize, formatNumber } from './index.js';

console.log('sum(typed):', add(2, 3));

console.log('capitalize(typed):', capitalize('hello'));

// ПОМИЛКА ТИПІВ: рядок замість числа

console.log('format(ok):', formatNumber(123.456, { precision: 2 }));
