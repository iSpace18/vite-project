import './style.css'



// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//       console.log(i)
//   }
// }


// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }



// let number: number | null = null


// while (number === null || number <= 100) {
//     let input = prompt("Введите число больше 100:", "") 
//     if (input === null) {
//         alert("Отменено")
//         break;
//     } else {
//       number = +input
//     }
// }

// if (number !== null && number > 100) {
//     alert(`Вы ввели число больше 100: ${number}`)
// }


// let n = 10

// nextPrime:
// for (let i = 2; i <= n; i++) {

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime
//   }

//   alert( i );
// }

















          //Проверка значения из диапозона
// let age: number = 14;

// if (age >= 14 && age <= 90) {
//     console.log("Возраст находится в диапазоне от 14 до 90 включительно");
// } else {
//     console.log("Возраст находится вне диапазона от 14 до 90");
// }



//С использованием оператора НЕ  !
// let age: number = 25;

// if (!(age >= 14 && age <= 90)) {
//     console.log("Возраст НЕ находится в диапазоне от 14 до 90 включительно");
// } else {
//     console.log("Возраст находится в диапазоне от 14 до 90");
// }



//Без использования оператора НЕ  ! 
// let age: number = 25;

// if (age < 14 || age > 90) {
//     console.log("Возраст НЕ находится в диапазоне от 14 до 90 включительно");
// } else {
//     console.log("Возраст находится в диапазоне от 14 до 90");
// }



//Вопрос об if 
// let login: string | null = prompt("Введите логин:", "")

// if (login === "Админ") {
//     let password: string | null = prompt("Введите пароль:", "")

//     if (password === "Я главный") {
//         alert("Здравствуйте!")
//     } else if (password === null || password === "") {
//         alert("Отменено")
//     } else {
//         alert("Неверный пароль")
//     }
// } else if (login === null || login === "") {
//     alert("Отменено")
// } else {
//     alert("Я вас не знаю")
// }













                                                                      // пример использования switch
// let day: number = 8
// let dayName: string

// switch (day) {
//     case 1:
//         dayName = "Понедельник"
//         break
//     case 2:
//         dayName = "Вторник"
//         break
//     case 3:
//         dayName = "Среда"
//         break
//     case 4:
//         dayName = "Четверг"
//         break
//     case 5:
//         dayName = "Пятница"
//         break
//     case 6:
//         dayName = "Суббота"
//         break
//     case 7:
//         dayName = "Воскресенье"
//         break
//     default:
//         dayName = "Некорректный день"
// }
// console.log(`Сегодня ${dayName}`);

                                          // пример использования логических операторов
// let isSunny: boolean = true;
// let temperature: number = 65;
// let isWeekend: boolean = false;

// if (isSunny && temperature > 20) {
//     console.log("Погода отличная для прогулки!");
// } else if (isSunny && temperature <= 20) {  
//     console.log("Можно пойти на прогулку, но возьми кофту!");
// } else if (!isSunny || isWeekend) {  
//     console.log("Сегодня пасмурно или выходной, лучше остаться дома.");
// } else {  
//     console.log("Погода неопределенная, решайте сами.");
// }    


































































 











































































                                                               //вводный
// let nemo = ('makaka')
// let p = ('Obezyana')
// console.log('Hello World!!!')
// console.log(`Hello, ${nemo} ты ${p}`)
// let num1 = 10
// let num2 = 10
// let num3 = 1
// console.log(num2 / num3)

























































































                                                               //скопированный код для калькулятора
// function getHistory(){
//   return document.getElementById("history-value").innerText;
// }
// function printHistory(num: string){
//   document.getElementById("history-value").innerText=num;
// }
// function getOutput(){
//   return document.getElementById("output-value").innerText;
// }
// function printOutput(num: string | number){
//   if(num==""){
//       document.getElementById("output-value").innerText=num;
//   }
//   else{
//       document.getElementById("output-value").innerText=getFormattedNumber(num);
//   }	
// }
// function getFormattedNumber(num: string){
//   if(num=="-"){
//       return "";
//   }
//   var n = Number(num);
//   var value = n.toLocaleString("en");
//   return value;
// }
// function reverseNumberFormat(num: string){
//   return Number(num.replace(/,/g,''));
// }
// var operator = document.getElementsByClassName("operator");
// for(var i =0;i<operator.length;i++){
//   operator[i].addEventListener('click',function(){
//       if(this.id=="clear"){
//           printHistory("");
//           printOutput("");
//       }
//       else if(this.id=="backspace"){
//           var output=reverseNumberFormat(getOutput()).toString();
//           if(output){//if output has a value
//               output= output.substr(0,output.length-1);
//               printOutput(output);
//           }
//       }
//       else{
//           var output=getOutput();
//           var history=getHistory();
//           if(output==""&&history!=""){
//               if(isNaN(history[history.length-1])){
//                   history= history.substr(0,history.length-1);
//               }
//           }
//           if(output!="" || history!=""){
//               output= output==""?output:reverseNumberFormat(output);
//               history=history+output;
//               if(this.id=="="){
//                   var result=eval(history);
//                   printOutput(result);
//                   printHistory("");
//               }
//               else{
//                   history=history+this.id;
//                   printHistory(history);
//                   printOutput("");
//               }
//           }
//       }
      
//   });
// }












































                                                               //оператор if
// var number = document.getElementsByClassName("number");
// for(var i =0;i<number.length;i++){
//   number[i].addEventListener('click',function(){
//       var output=reverseNumberFormat(getOutput());
//       if(output!=NaN){ //if output is a number
//           output=output+this.id; 
//           printOutput(output);
//       }
//   });
// }




















                                                             // можно переназначить var
// var a = 10
// console.log(a)
// var a = 20
// console.log(a)
// // не меняется
// let newVar = 5 
// console.log(newVar)
// // не заданное значение noVal
// let noVal
// console.log(noVal)
// // НЕЛЬЗЯ переназначать константу
// const DAY_IN_WEEK = 7
// // DAY_IN_WEEK = 8
// // нельзя использовать цифры в название переменной
// // let 23 
// console.log('1+1=',1+1)
// console.log('10+1=',10+1)
// console.log('5-1=',5-1)
// console.log('134*4=',134*4)
// console.log('3 в 3 степени=',3**3)
// let number1 = prompt("Введите первое число:")
// let number2 = prompt("Введите второе число:")







                                                                                    //калькулятор 
// // let sum = parseFloat(number1) + parseFloat(number2)
// // let raznost = parseFloat(number1) - parseFloat(number2)
// // let del = parseFloat(number1) / parseFloat(number2)
// // let ymnoj = parseFloat(number1) * parseFloat(number2)
// // let stepen = parseFloat(number1) ** parseFloat(number2)
// // alert('Сумма чисел равна: ' + sum +'\nРазность чисел равна:' +raznost +'\nПри деление:'+ del +'\nПри умножении:'+ymnoj+'\nПервое число в степени второго числа: '+stepen)
// alert("Задание 1 нажмите ок чтобы продолжить")
// let name = prompt('Введите ваше имя: ')
// alert('Привет, '+ name)















                // alert("Задание 2 нажмите ок чтобы продолжить")
// const DATE = 2024
// let date_of_born = prompt('Введите свою дату рождения') as string
// alert('Сейчас вам: '+ (DATE - +date_of_born))










               // alert("Задание 3 нажмите ок чтобы продолжить")
// let perimetr = prompt('Введите длину стороны квадрата') as string
// alert('Периметр квадрата = '+ Number(perimetr)*4)




















                // alert("Задание 4 нажмите ок чтобы продолжить")
// let radius = prompt('Введите радиус окружности') as string
// alert(Math.PI * +radius * +radius )
















                           // alert("Задание 5 нажмите ок чтобы продолжить")
// let distance = prompt("Введите расстояние между городами в километрах:")
// let time = prompt("Введите время, за которое вы хотите добраться (в часах):") as string
// let speed = (+distance / +time)
// alert('Чтобы успеть вовремя, необходимо двигаться со скоростью ' + speed + 'км/ч.')












                          // alert("Задание 6 нажмите ок чтобы продолжить")
// const exchangeRate = 0.93 // Курс обмена 1 доллар = 0,93 евро
// let dollars = prompt("Введите сумму в долларах:")
// let euros = dollars * exchangeRate
// alert(dollars+' долларов равно примерно ' + euros + 'евро.')




















                        // alert("Задание 7 нажмите ок чтобы продолжить")
// let flashDriveSize = prompt("Укажите объем флешки в Гб:")
// const fileSizeMB = 820
// let flashDriveSizeMB = flashDriveSize * 1024
// let filesCount = Math.floor(flashDriveSizeMB / fileSizeMB)
// alert('На флешку объемом '+flashDriveSize+' Гб поместится примерно '+filesCount+' файлов размером 820 Мб.');
























                    // alert("Задание 8 нажмите ок чтобы продолжить")
// let walletMoney = prompt("Введите сумму денег в вашем кошельке:")
// let chocolatePrice = prompt("Введите цену одной шоколадки:")
// let chocolatesCount = Math.floor(walletMoney / chocolatePrice)
// let change = walletMoney % chocolatePrice
// alert('Вы можете купить ' + chocolatesCount + ' шоколадок и у вас останется ' + change + ' денег в кошельке.')


























                           // alert("Задание 10 нажмите ок чтобы продолжить")
// let number2 = prompt("Введите целое число:");
// let isEven = number2 % 2 === 0;
// let result = isEven ? "Число четное." : "Число нечетное.";
// alert(result);









