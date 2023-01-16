// let element = document.querySelector('#items2')
// element.style.background = 'green'
let header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px black'
let input = document.querySelector('input')
input.value='hello'

let submit = document.querySelector('input[type="submit"]')
submit.value = 'send'

let seconditem = document.querySelector(".list-group-item:nth-child(2)")
seconditem.style.color = 'red'
let thirditem = document.querySelector(".list-group-item:nth-child(3)")
thirditem.style.display = 'none'


let odd = document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
