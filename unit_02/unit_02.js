// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let  a = 7
let b = 9
console.log(a*b)
// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7
let d = 9
document.querySelector('.out-2').innerHTML = c/d
// document.querySelector('.out-2').textContent = 

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3
let f = 5
document.querySelector('.out-3').innerHTML = e+f
// document.querySelector('.out-3').textContent = 

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3'
let f1 = 5
document.querySelector('.out-4').innerHTML = e1+f1
//Сложения строки на цифру получилось строка+цифра
// document.querySelector('.out-4').textContent = 

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3
let f2 = 0
document.querySelector('.out-5').innerHTML = e2/f2
console.log(e2/f2)
// document.querySelector('.out-5').textContent = 

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3
let f3 = ' Hello'
document.querySelector('.out-6').innerHTML = e3+f3
// document.querySelector('.out-6').textContent = 

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3
let f4 = 'Hello'
document.querySelector('.out-7').innerHTML = e4*f4
// document.querySelector('.out-7').textContent = 

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

function t8() {
  console.log(document.querySelector('.task8__input').value)
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

function t9() {
    let input9 = document.querySelector('.i-9')
  alert(input9.value)
  input9.value = ''
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

function t10() {
    let input10 = document.querySelector('.i-10')
    alert(input10.value*10)
    input10.value = ''
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

function t11() {
    let out = document.querySelector('.out-11')
    let = i11 = document.querySelector('.i-11')
    out.innerHTML = +i11.value+10
    i11.value = ''
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

function t12() {
    let out = document.querySelector('.out-12')
    let name = document.querySelector('.i-12_1')
    let surname = document.querySelector('.i-12_2')
    out.innerHTML = `Hello ${name.value} ${surname.value}`
    name.value = ''
    surname.value = ''
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

function t13() {
    let out = document.querySelector('.out-13')
    let name = document.querySelector('.i-13_1')
    let surname = document.querySelector('.i-13_2')
    out.innerHTML = `Sum: ${(+name.value)+(+surname.value)}`
    name.value = ''
    surname.value = ''

}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector('.i-14').value = 'Hello'

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

 let y = document.querySelector('.i-15')
 y.style.border = '2px solid green'

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

function t16() {
    let out = document.querySelector('.out-13')
    let name = document.querySelector('.i-16-1')
    let surname = document.querySelector('.i-16-2')
    alert(`Sum: ${(+name.value)+(+surname.value)}`)
    name.value = ''
    surname.value = ''

}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t17() {
  let input = document.querySelector('.i-17')
  let t = input.value
  t = parseInt(t)
  document.querySelector('.out-17').innerHTML = t
  input.value = ''
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t18() {
    let input = document.querySelector('.i-18')
    let t = input.value
    t = parseFloat(t)
    document.querySelector('.out-18').innerHTML = t
    input.value = ''

}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

function t19() {
    let input1 = document.querySelector('.i-19-1')
    let input2 = document.querySelector('.i-19-2')
    let t1 = input1.value
    t1 = parseInt(t1)
    let t2 = input2.value
    t2 = parseInt(t2)
   alert(t1+t2)
    input1.value = ''
    input2.value = ''

}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

function t20() {
 let name = document.querySelector('.t20_name').value
 let surname = document.querySelector('.t20_surname').value
 let age = document.querySelector('.t20_age').value
 let hobby = document.querySelector('.t20_hobby').value
 alert(`Уважаемый ${name}, ${surname} ваш возраст ${age} года, по профессии вы ${hobby}`)
}

document.querySelector('.b-20').onclick = t20;