// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function buildaCube(num) {
    var cube = Math.pow(num, 3);
    var result = cube + Math.pow(3, 3);
    console.log(result);
}

buildaCube(2);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function calculateWages(num) {
    if (isNaN(num)) {
        console.log("Значение задано неверно");
    } else {
        var deduction = num * 0.13;
        var Wages = num - deduction;
        console.log("Размер заработной платы за вычетом налогов равен " + Wages);
    }
}

var input = prompt("Введите число:");
calculateWages(parseFloat(input));


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function defineMaximumValue(a, b, c) {
    var maximum = Math.max(a, b, c);
    console.log("Максимальное значение: " + maximum);
}

var num1 = parseFloat(prompt("Введите первое число:"));
var num2 = parseFloat(prompt("Введите второе число:"));
var num3 = parseFloat(prompt("Введите третье число:"));

defineMaximumValue(num1, num2, num3);


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление


function addition(a, b) {
    return a + b;
}

function difference(a, b) {
    if (a > b) {
        return a - b;
    } else if (a < b) {
        return b - a;
    } else {
        return 0;
    }
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

console.log(addition(2, 6));
console.log(difference(6, 2));
console.log(multiplication(2, 6));
console.log(division(6, 2)); 
