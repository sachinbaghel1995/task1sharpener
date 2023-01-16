let elem = document.querySelector('#items')
console.log(elem.parentNode)
elem.parentNode.style.background='#f4f4f4'
console.log(elem.parentNode.parentNode.parentNode)

console.log(elem.parentElement)
elem.parentElement.style.background = 'violet'

// console.log(elem.childNodes)
console.log(elem.children)
elem.children[1].style.background='yellow'

// console.log(elem.firstChild)
console.log(elem.firstElementChild)
elem.firstElementChild.textContent='new text'
// console.log(elem.lastChild)
console.log(elem.lastElementChild)
elem.lastElementChild.innerText='code'

// console.log(elem.nextSibling)
console.log(elem.nextElementSibling)

console.log(elem.previousElementSibling)
elem.previousElementSibling.style.color='red'


let newDiv = document.createElement('div')
newDiv.className='div1'
newDiv.id = 'div2'
newDiv.setAttribute('title' , 'hello')

let newDivText= document.createTextNode('HELLO WORLD')
newDiv.appendChild(newDivText)
console.log(newDiv)

var container = document.querySelector('header  .container')
var h1 = document.querySelector('header  h1')
console.log(newDiv)
newDiv.style.fontSize = '35px'
container.insertBefore(newDiv,h1)


let element = document.createElement('li')
element.className=('childul')
element.id='creratedli'
element.setAttribute('title', 'sachin')
element.innerText='helloworld'
console.log(element)

let ul=document.querySelector('ul.list-group')
ul.insertBefore(element,ul.firstChild)
