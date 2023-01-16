var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)


function addItem(e) {
    e.preventDefault()
    var newItem = document.getElementById('item').value
    var li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    var newItem1 = document.getElementById('item-2').value
    var li1 = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem1))

    var deltButton = document.createElement('button')
    deltButton.className = 'btn btn-danger btn-sm float-right delete'
    deltButton.appendChild(document.createTextNode('x'))
    li.appendChild(deltButton)
    itemList.appendChild(li)

    var editButton = document.createElement('button')
    editButton.className = 'btn btn-danger btn-sm float-right delete'
    editButton.appendChild(document.createTextNode('Edit'))

    li.appendChild(editButton)
    itemList.appendChild(li)
}

function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}
var filter = document.getElementById('filter')
filter.addEventListener('keyup', filterItems)
function filterItems(e) {
    var text = e.target.value.toLowerCase()
    // get list
    var items = itemList.getElementsByTagName('li')
    Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent
        const newItem1 = item.childNodes[1].textContent
        if (itemName.toLowerCase().indexOf(text) != -1 || newItem1.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
}
