// let element = document.domain
// element=document.URL
// element=document.title

// document.title='this is new title'
// element=document.doctype
// element=document.head
// element=document.body
// element=document.all
// element=document.all[10]
// element=document.forms
// console.log(element)

let elem = document.getElementById('header-title')
console.log(elem)
elem.innerText='hello'
elem.textContent = 'goodbye'

elem.innerHTML = '<h3>this is html</h3>'
// elem.style.borderBottom = 'solid 4px red'
let elem2=document.querySelector('#main-header')
elem2.style.borderBottom = 'solid 4px red'

let items =document.getElementsByClassName('list-group-item')
items[1].textContent='hello'
items[0].style.backgroundColor = 'green'
items[0].style.fontWeight='bold'

for(let i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='pink'
}
