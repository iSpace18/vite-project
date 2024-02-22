import './style.css'
// // console.log('Hello World!!!')
// // // можно переназначить var
// // var a = 10
// // console.log(a)
// // var a = 20
// // console.log(a)
// // // не меняется
// // let newVar = 5 
// // console.log(newVar)
// // // не заданное значение noVal
// // let noVal
// // console.log(noVal)
// // // НЕЛЬЗЯ переназначать константу
// // const DAY_IN_WEEK = 7
// // // DAY_IN_WEEK = 8
// // // нельзя использовать цифры в название переменной
// // // let 23 
// // console.log('1+1=',1+1)
// // console.log('10+1=',10+1)
// // console.log('5-1=',5-1)
// // console.log('134*4=',134*4)
// // console.log('3 в 3 степени=',3**3)
// // let number1 = prompt("Введите первое число:")
// // let number2 = prompt("Введите второе число:")

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