// import './style.css'

//   1. Функция, возвращающая меньшее из двух чисел
//  let num1 = 4;
//  let num2 = 5;

//  function findSmallerNumber(num1:number, num2:number) {
//      return Math.min(num1, num2);
//  }
//  console.log(findSmallerNumber(num1, num2));

//   2. Функция, возводящая число в указанную степень

//  let base = 2;
//  let exponent = 3;
//  function calculatePower(base:number, exponent:number) {
//      return Math.pow(base, exponent);
//  }
//  console.log(calculatePower(base, exponent));

//  3. Функция, выполняющая арифметические операции над двумя числами

//  let num1 = 10;
//  let num2 = 5;
//  let operator = '*';
//  function calculateExpression(num1:number, num2:number, operator:string) {
//      switch(operator) {
//          case '+':
//              return num1 + num2;
//          case '-':
//              return num1 - num2;
//          case '*':
//              return num1 * num2;
//          case '/':
//              return num1 / num2;
//          default:
//              return 0;
//      }
//  }

//  console.log(calculateExpression(num1, num2, operator));

//   4. Функция, проверяющая является ли число простым
//  function isPrimeNumber(num: number): boolean {
//      if (num <= 1) return false
//      for (let i = 2; i <= Math.sqrt(num); i++) {
//          if (num % i === 0) return false
//      }
//      return true
//  }

//   5. Функция, выводящая таблицу умножения для числа
//  function multiplicationTable(num: number): void {
//      for (let i = 1; i <= 10; i++) {
//          console.log(`${num} * ${i} = ${num * i}`)
//      }
//  }

//   6. Функция, реализующая оператор %
//  function moduloOperator(num1: number, num2: number): number {
//      return num1 - Math.floor(num1 / num2) * num2
//  }

//   7. Функция, возвращающая сумму переданных чисел
// function sumNumbers(...numbers: number[]): number {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// const result1 = sumNumbers(5);
// const result2 = sumNumbers(2, 4, 6);
// const result3 = sumNumbers(1, 2, 3, 4, 5);

// console.log(result1); 
// console.log(result2); 
// console.log(result3); 

//   8. Функция, возвращающая наибольшее из переданных чисел
//  function findLargestNumber(...nums: number[]): number {
//      return Math.max(...nums)
//  }

//9
// function printNumbersInRange(start: number, end: number, isEven: boolean): void {
//     for (let i = start; i <= end; i++) {
//         if ((isEven && i % 2 === 0) || (!isEven && i % 2 !== 0)) {
//             console.log(i)
//         }
//     }
// }
// console.log("Четные числа в диапазоне 1-10:")
// printNumbersInRange(1, 10, true)

// console.log("Нечетные числа в диапазоне 1-10:")
// printNumbersInRange(1, 10, false)


//10
// function isLeapYear(year: number): boolean {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
// }

// function getNextDay(date: Date): string {
//     const nextDate = new Date(date)
//     nextDate.setDate(date.getDate() + 1)
//     return `${nextDate.getDate() < 10 ? '0' : ''}${nextDate.getDate()}.${(nextDate.getMonth() + 1) < 10 ? '0' : ''}${nextDate.getMonth() + 1}.${nextDate.getFullYear()}`
// }


// const currentDate = new Date(2024, 0, 31);
// console.log(`Следующий день после ${currentDate.toLocaleDateString()}: ${getNextDay(currentDate)}`)




// //1
// function factorial(n: number): number {
//     if (n === 0) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }

// console.log(factorial(3))

// //2
// function printNumbersForward(start: number, end: number): void {
//     if (start <= end) {
//         console.log(start)
//         printNumbersForward(start + 1, end)
//     }
// }

// function printNumbersBackward(start: number, end: number): void {
//     if (start <= end) {
//         printNumbersBackward(start + 1, end)
//         console.log(start)
//     }
// }

// printNumbersForward(1, 5)
// printNumbersBackward(1, 5)

// //3
// function reverseNumber(n: number): number {
//     if (n < 10) {
//         return n
//     } else {
//         return +(String(n % 10) + String(reverseNumber(Math.floor(n / 10))))
//     }
// }

// console.log(reverseNumber(1234))

// //4
// function sumOfDigits(n: number): number {
//     if (n < 10) {
//         return n
//     } else {
//         return n % 10 + sumOfDigits(Math.floor(n / 10))
//     }
// }

// console.log(sumOfDigits(1357))

// //5
// function generateParenthesesPairs(n: number): string {
//     if (n === 0) {
//         return ''
//     } else {
//         return '(' + generateParenthesesPairs(n - 1) + ')'
//     }
// }

// console.log(generateParenthesesPairs(4))



// //1
// function power(base: number, exponent: number): number {
//     if (exponent === 0) {
//         return 1
//     } else {
//         return base * power(base, exponent - 1)
//     }
// }

// console.log(power(2, 3))


// //2

// function gcd(a: number, b: number): number {
//     if (b === 0) {
//         return a
//     } else {
//         return gcd(b, a % b)
//     }
// }

// console.log(gcd(24, 36))
// //3

// function maxDigit(n: number): number {
//     if (n < 10) {
//         return n
//     } else {
//         const remainder = n % 10
//         const restMax = maxDigit(Math.floor(n / 10));
//         return remainder > restMax ? remainder : restMax
//     }
// }

// console.log(maxDigit(5839))

// //4
// function isPrime(n: number, divisor: number = 2): boolean {
//     if (n < 2) {
//         return false
//     } else if (n === 2) {
//         return true;
//     } else if (n % divisor === 0) {
//         return false
//     } else if (divisor * divisor > n) {
//         return true
//     } else {
//         return isPrime(n, divisor + 1)
//     }
// }

// console.log(isPrime(17))

// //5
// function factorize(n: number, divisor: number = 2): void {
//     if (n === 1) {
//         return
//     }
//     if (n % divisor === 0) {
//         console.log(divisor)
//         factorize(n / divisor, divisor )
//     } else {
//         factorize(n, divisor + 1)
//     }
// }

// factorize(18)


// //6
// function fibonacci(n: number): number {
//     if (n <= 1) {
//         return n
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// console.log(fibonacci(6))





//1
// const user = {
//     name:"John",
//     surname:"Smith"
// };
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
//2
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
//   }

//3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   alert(sum)




// type Fraction = {
//     numerator: number;
//     denominator: number;
// };

// function findCommonDenominator(fraction1: Fraction, fraction2: Fraction): number {
//     const lcm = (fraction1.denominator * fraction2.denominator) / findGCD(fraction1.denominator, fraction2.denominator);
//     return lcm;
// }

// function findGCD(a: number, b: number): number {
//     if (b === 0) {
//         return a;
//     } else {
//         return findGCD(b, a % b);
//     }
// }

// const fraction1: Fraction = { numerator: 1, denominator: 3 };
// const fraction2: Fraction = { numerator: 2, denominator: 5 };

// const commonDenominator = findCommonDenominator(fraction1, fraction2);
// console.log(
//     `Общий знаменатель для дробей ${fraction1.numerator}/${fraction1.denominator} и ${fraction2.numerator}/${fraction2.denominator} = ${commonDenominator}`);

//HOД
function findGCD(a: number, b: number): number {
    if (b === 0) {
        return a;
    } else {
        return findGCD(b, a % b);
    }
}

const num1 = 24;
const num2 = 36;
const gcd = findGCD(num1, num2);
console.log(
    `Наибольший общий делитель чисел ${num1} и ${num2} равен ${gcd}`);












// function generateRandomPassword(length: number): string {
//     const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
//     let password = ''
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length)
//         password += charset[randomIndex]
//     }
//     return password
// }

// const passwordLength = 12
// const randomPassword = generateRandomPassword(passwordLength)
// console.log(`Cгенерированный пароль: ${randomPassword}`)













//  for (let i = 2; i <= 10; i++) {
//    if (i % 2 === 0) {
//        console.log(i)
//    }
//  }


//  let i = 0;
//  while (i < 3) {
//      alert(`number ${i}!`);
//      i++;
//  }



//  let number: number | null = null


//  while (number === null || number <= 100) {
//      let input = prompt("Введите число больше 100:", "") 
//      if (input === null) {
//          alert("Отменено")
//          break;
//      } else {
//        number = +input
//      }
//  }

//  if (number !== null && number > 100) {
//      alert(`Вы ввели число больше 100: ${number}`)
//  }


//  let n = 10

//  nextPrime:
//  for (let i = 2; i <= n; i++) {

//    for (let j = 2; j < i; j++) {
//      if (i % j == 0) continue nextPrime
//    }

//    alert( i );
//  }








//           Проверка значения из диапозона
//  let age: number = 14;

//  if (age >= 14 && age <= 90) {
//      console.log("Возраст находится в диапазоне от 14 до 90 включительно");
//  } else {
//      console.log("Возраст находится вне диапазона от 14 до 90");
//  }



// С использованием оператора НЕ  !
//  let age: number = 25;

//  if (!(age >= 14 && age <= 90)) {
//      console.log("Возраст НЕ находится в диапазоне от 14 до 90 включительно");
//  } else {
//      console.log("Возраст находится в диапазоне от 14 до 90");
//  }



// Без использования оператора НЕ  ! 
//  let age: number = 25;

//  if (age < 14 || age > 90) {
//      console.log("Возраст НЕ находится в диапазоне от 14 до 90 включительно");
//  } else {
//      console.log("Возраст находится в диапазоне от 14 до 90");
//  }



// Вопрос об if 
//  let login: string | null = prompt("Введите логин:", "")

//  if (login === "Админ") {
//      let password: string | null = prompt("Введите пароль:", "")

//      if (password === "Я главный") {
//          alert("Здравствуйте!")
//      } else if (password === null || password === "") {
//          alert("Отменено")
//      } else {
//          alert("Неверный пароль")
//      }
//  } else if (login === null || login === "") {
//      alert("Отменено")
//  } else {
//      alert("Я вас не знаю")
//  }








//                                                                        пример использования switch
//  let day: number = 8
//  let dayName: string

//  switch (day) {
//      case 1:
//          dayName = "Понедельник"
//          break
//      case 2:
//          dayName = "Вторник"
//          break
//      case 3:
//          dayName = "Среда"
//          break
//      case 4:
//          dayName = "Четверг"
//          break
//      case 5:
//          dayName = "Пятница"
//          break
//      case 6:
//          dayName = "Суббота"
//          break
//      case 7:
//          dayName = "Воскресенье"
//          break
//      default:
//          dayName = "Некорректный день"
//  }
//  console.log(`Сегодня ${dayName}`);




//                                            пример использования логических операторов
//  let isSunny: boolean = true;
//  let temperature: number = 65;
//  let isWeekend: boolean = false;

//  if (isSunny && temperature > 20) {
//      console.log("Погода отличная для прогулки!");
//  } else if (isSunny && temperature <= 20) {  
//      console.log("Можно пойти на прогулку, но возьми кофту!");
//  } else if (!isSunny || isWeekend) {  
//      console.log("Сегодня пасмурно или выходной, лучше остаться дома.");
//  } else {  
//      console.log("Погода неопределенная, решайте сами.");
//  }    


//  function ymnoj(a,b){
//      return a*b
//  }
//  let result= ymnoj(5,4)
//  console.log(result)

//  let add = function(a:number, b:number) {
//      return a + b
//  }

//  let sum = add(5, 3)
//  console.log(sum)

// let square = (x:number) => {
//     return x * x
// }

// let result = square(3)
// console.log(result)



//  1. Вывести "#" столько раз, сколько указал пользователь:
//  const count: number = 5
//  let i: number = 0
//  while (i < count) {
//      console.log("#")
//      i++
//  }


//  2. Вывести все числа от введенного пользователем до 0:
//  const num: number = 2
//  while (num >= 0) {
//      console.log(num)
//      num--
//  }

//  3. Возвести число в указанную степень и вывести результат:
//  const num: number =4
//  const power: number = 1
//  let result: number = 1
//  let i: number = 0
//  while (i < power) {
//      result *= num
//      i++;
//  }
//  console.log(`Результат: ${result}`)


//  4. Найти все общие делители двух чисел:
//  const num1: number =4;
//  const num2: number =2;
//  let i: number = 1
//  while (i <= num1 && i <= num2) {
//      if (num1 % i === 0 && num2 % i === 0) {
//          console.log(i)
//      }
//      i++
//  }




//  5. Посчитать факториал введенного пользователем числа:
//  const num: number = 5
//  let factorial: number = 1
//  let i: number = 1
//  while (i <= num) {
//      factorial *= i
//      i++
//  }
//  console.log(`Факториал числа ${num} равен ${factorial}`)





//  ■ Задания, в которых необходимо использовать DO WHILE.

//  1. Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно:

//  let userAnswer: number
//  do {
//      userAnswer = Number(prompt("Решите пример: 2 + 2 * 2 = "))
//  } while (userAnswer !== 6)
//  console.log("Верно!")


//  2. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели:

//  let number = 1000
//  let divisions = 0
//  do {
//      number /= 2
//      divisions++
//  } while (number >= 50)
//  console.log(`Полученное число: ${number}`)
//  console.log(`Количество делений: ${divisions}`)











//                                                                вводный
//  let nemo = ('makaka')
//  let p = ('Obezyana')
//  console.log('Hello World!!!')
//  console.log(`Hello, ${nemo} ты ${p}`)
//  let num1 = 10
//  let num2 = 10
//  let num3 = 1
//  console.log(num2 / num3)






//                                                                оператор if
//  var number = document.getElementsByClassName("number");
//  for(var i =0;i<number.length;i++){
//    number[i].addEventListener('click',function(){
//        var output=reverseNumberFormat(getOutput());
//        if(output!=NaN){ if output is a number
//            output=output+this.id; 
//            printOutput(output);
//        }
//    });
//  }









//                                                               можно переназначить var
//  var a = 10
//  console.log(a)
//  var a = 20
//  console.log(a)
//   не меняется
//  let newVar = 5 
//  console.log(newVar)
//   не заданное значение noVal
//  let noVal
//  console.log(noVal)
//   НЕЛЬЗЯ переназначать константу
//  const DAY_IN_WEEK = 7
//   DAY_IN_WEEK = 8
//   нельзя использовать цифры в название переменной
//   let 23 
//  console.log('1+1=',1+1)
//  console.log('10+1=',10+1)
//  console.log('5-1=',5-1)
//  console.log('134*4=',134*4)
//  console.log('3 в 3 степени=',3**3)
//  let number1 = prompt("Введите первое число:")
//  let number2 = prompt("Введите второе число:")







//                                                                                     калькулятор 
//   let sum = parseFloat(number1) + parseFloat(number2)
//   let raznost = parseFloat(number1) - parseFloat(number2)
//   let del = parseFloat(number1) / parseFloat(number2)
//   let ymnoj = parseFloat(number1) * parseFloat(number2)
//   let stepen = parseFloat(number1) ** parseFloat(number2)
//   alert('Сумма чисел равна: ' + sum +'\nРазность чисел равна:' +raznost +'\nПри деление:'+ del +'\nПри умножении:'+ymnoj+'\nПервое число в степени второго числа: '+stepen)
//  alert("Задание 1 нажмите ок чтобы продолжить")
//  let name = prompt('Введите ваше имя: ')
//  alert('Привет, '+ name)








//                  alert("Задание 2 нажмите ок чтобы продолжить")
//  const DATE = 2024
//  let date_of_born = prompt('Введите свою дату рождения') as string
//  alert('Сейчас вам: '+ (DATE - +date_of_born))







//                 alert("Задание 3 нажмите ок чтобы продолжить")
//  let perimetr = prompt('Введите длину стороны квадрата') as string
//  alert('Периметр квадрата = '+ Number(perimetr)*4)









//                  alert("Задание 4 нажмите ок чтобы продолжить")
//  let radius = prompt('Введите радиус окружности') as string
//  alert(Math.PI * +radius * +radius )








//                             alert("Задание 5 нажмите ок чтобы продолжить")
//  let distance = prompt("Введите расстояние между городами в километрах:")
//  let time = prompt("Введите время, за которое вы хотите добраться (в часах):") as string
//  let speed = (+distance / +time)
//  alert('Чтобы успеть вовремя, необходимо двигаться со скоростью ' + speed + 'км/ч.')






//                            alert("Задание 6 нажмите ок чтобы продолжить")
//  const exchangeRate = 0.93  Курс обмена 1 доллар = 0,93 евро
//  let dollars = prompt("Введите сумму в долларах:")
//  let euros = dollars * exchangeRate
//  alert(dollars+' долларов равно примерно ' + euros + 'евро.')













//                          alert("Задание 7 нажмите ок чтобы продолжить")
//  let flashDriveSize = prompt("Укажите объем флешки в Гб:")
//  const fileSizeMB = 820
//  let flashDriveSizeMB = flashDriveSize * 1024
//  let filesCount = Math.floor(flashDriveSizeMB / fileSizeMB)
//  alert('На флешку объемом '+flashDriveSize+' Гб поместится примерно '+filesCount+' файлов размером 820 Мб.');













//                      alert("Задание 8 нажмите ок чтобы продолжить")
//  let walletMoney = prompt("Введите сумму денег в вашем кошельке:")
//  let chocolatePrice = prompt("Введите цену одной шоколадки:")
//  let chocolatesCount = Math.floor(walletMoney / chocolatePrice)
//  let change = walletMoney % chocolatePrice
//  alert('Вы можете купить ' + chocolatesCount + ' шоколадок и у вас останется ' + change + ' денег в кошельке.')














//                             alert("Задание 10 нажмите ок чтобы продолжить")
//  let number2 = prompt("Введите целое число:");
//  let isEven = number2 % 2 === 0;
//  let result = isEven ? "Число четное." : "Число нечетное.";
//  alert(result);