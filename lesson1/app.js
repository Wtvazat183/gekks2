// console.log('Hello world!') - строчный
/*qwerty
* yuiop - блочный коммент
* asdf
* */

//переменная
var username = 'Aidana'
console.log(username)
//camelCase
var nameAndSurname = 'Bekova Aidana'

//типы данных
// 1)string
var text = 'froNtend!'
console.log('тип данных', typeof text)
//методы
console.log(text.length)
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.repeat(23))
console.log(typeof Number(text))

//2)number
var number = 90
// console.log(typeof number)
console.log(typeof number.toString())
console.log('Средний возраст группы 31-03 ->', (17 + 17 + 19 + 15 + 17 + 17 + 17 + 17 + 19 + 18 + 19 + 18 + 29 + 21 + 17) / 15, 'лет')
//+, -, /, *, **, %
console.log(8%4) //остаток от деления

// 3)boolean = true, false
var num1 = 89
var num2 = '89'
console.log(num1 === num2)
//>, <, >=, <=, ==, ===, !=, !==
//! - частица НЕ либо отрицание
console.log(true)

//операторы
//условные операторы
var login = 'bekovaaidana'
var password = 12345
var userLogin = prompt('Введите ваш логин')
var userPassword = Number(prompt('Введите ваш пароль')) //'12345'
if(userLogin === login || userPassword === password){
    alert('Авторизация прошла успешно')
}else{
    console.error('Авторизация не прошла')
}

//логические операторы &&, ||
















