// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

// let num = prompt("Write a number")
// console.log(Number(num /= 10))

// Написать программу, которая получает два числа и выводит наименьшее

// let secondNumber = +prompt("Enter a first number")
// let firstNumber = +prompt("Enter a second number")
// console.log(Math.min(secondNumber, firstNumber))

// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

// let numberInput = prompt ("Input number")
// if (Number(numberInput) < 100) {
//     console.log("Your number is less then 100")
// } else if (Number(numberInput) > 100) {
//     console.log("Your number is greater then 100")
// } else if (Number(numberInput) === 100) {
//     console.log("Your number is equal to 100")
// } else {
//     console.log("Your input is invalid")
// }

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

let name = prompt("Write your name")
let age = prompt("Write your age")
if (age < 18 && age > 0) {
console.log(`Hi, ${name}`);
} else if (age >= 18) {
console.log(`Hello ${name}`)
} else {
        console.log("Your input is invalid")
    }
