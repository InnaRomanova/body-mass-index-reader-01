/* ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела (BMI).

2. - Индекс массы тела рассчитывается по формуле: 
вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. Сравнить массы тел двух людей (данные ниже), и вывести в консоль сравнения двух результатов в булевом значении (true / false).

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

4. У кого индекс BMI больше?

*/

const massPiter = 72;
const heightPiter = 1.88;
const massDenis = 82;
const heightDenis = 7.73;

const bmiPiter = massPiter / heightPiter ** 2;
console.log(bmiPiter);

const bmiDenis = massDenis / heightDenis ** 2;
console.log(bmiDenis);

let bmi = bmiDenis > bmiPiter;
console.log(bmi);
