var form = document.getElementById('addForm')
var itemList= document.getElementById('items')

form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
function addItem(e)
{
e.preventDefault()
var newItem = document.getElementById('item').value 
var li = document.createElement('li')
li.className = 'list-group-item'
li.appendChild(document.createTextNode(newItem))
var deltButton = document.createElement('button')
deltButton.className='btn btn-danger btn-sm float-right delete'
deltButton.appendChild(document.createTextNode('x'))
li.appendChild(deltButton)
itemList.appendChild(li)

var editButton = document.createElement('button')
editButton.className='btn btn-danger btn-sm float-right delete'
editButton.appendChild(document.createTextNode('Edit'))

li.appendChild(editButton)
itemList.appendChild(li)
}

function removeItem(e)
{
   
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement
            itemList.removeChild(li)
        }
    }
}