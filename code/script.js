const element = document.querySelector('h1')

element.textContent += '; Hello, devs'
element.innerText = 'Hello, world'
element.innerHTML = 'Hello, world<small>!!!</small>'

const input = document.querySelector('input')
console.log(input)
input.value = 'Value than I want'