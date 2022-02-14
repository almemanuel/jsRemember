// Start ternary
// var grade = prompt("Type your note: ")
// var ausence = prompt("Ausences: ")

// var average = 7
// var maxAusences = 15
// var isApproved = grade >= average && ausence <= maxAusences

// var result = isApproved? 'Approved' : 'Reproved'

// document.write(result)
// End ternary

// var param = 2

// switch (param) {
//     case 1:
//         document.write('Parameter 1')
//     break

//     case 2:
//         document.write('Parameter 2')

//     break

//     default:
//         document.write('Default')
// }

// var firstNumber = parseInt(prompt('First number: '))
// var secondNumber = parseInt(prompt('Second number: '))

// document.write(`${firstNumber}+${secondNumber}=${firstNumber + secondNumber}<br>`)
// document.write(`${firstNumber}-${secondNumber}=${firstNumber - secondNumber}<br>`)
// document.write(`${firstNumber}x${secondNumber}=${firstNumber * secondNumber}<br>`)
// document.write(`${firstNumber}/${secondNumber}=${firstNumber / secondNumber}<br>`)
// document.write(`${firstNumber}%${secondNumber}=${firstNumber % secondNumber}<br>`)
// document.write(`++${firstNumber}=${firstNumber}+1=${++firstNumber}<br>`) // pre
// document.write(`${firstNumber}--=${firstNumber--}-1=${firstNumber}<br>`) // post

// var number = parseInt(prompt('Type a number: '))

// number += 5 // thats work with +, -, *, /, %
// document.write(number)

// function calcArea(width, length){
//     return (width * length).toFixed(2)
// }

// var width = parseFloat(prompt('Width: '))
// var length = parseFloat(prompt('Length: '))


// document.write(`${calcArea(width, length)}m²`)

// function sum(a, b){
//     a = a === undefined ? 0 : a
//     b = b === undefined ? 0 : b
//     return a + b
// }

// // params flexibility
// console.log(sum(7, 7))
// console.log(sum(7, 7, 9, 15))
// console.log(sum(7))
// console.log(sum())


// var showSalute = function() {
//     document.write('Hello, world')
// }

// showSalute()


// function showArticle(id, callbackSuccessCallback, callbackErrorCallback){
//     if(true){
//         callbackSuccessCallback('SUCCESS')
//     } else{
//         callbackErrorCallback('ERROR')
//     }
// }

// var success = function(message){
//     document.write(`${message}`)
// }

// var error = function(message){
//     document.write(`${message}`)
// }

// showArticle(1, success, error)


// var word = 'lorem'
// // document.write(word.length)
// // document.write(word.charAt(3))
// // document.write(word.indexOf('e'))
// word = word.replace('lorem', 'ipsum')
// // document.write(word.substr(2, 4))
// // document.write(word.toLowerCase())
// // document.write(word.toUpperCase())


// var x = Math.random(x)
// // document.write(Math.ceil(x))
// // document.write(Math.floor(x))
// document.write(Math.round(x))


// var date = new Date()
// // document.write(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
// // date.setDate(date.getDate() + 1)
// // document.write(date.toString())

// var firstDate = new Date(2017, 0, 15)
// var secondDate = new Date(2017, 1, 23)
// firstDate = firstDate.getTime()
// secondDate = secondDate.getTime()
// document.write(Math.ceil((Math.abs(firstDate - secondDate)) / (24 * 60 * 60 * 1000)))


function action(){
    alert('OK')
}