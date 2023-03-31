let body = document.body;
console.log(body);
body.style.backgroundColor = 'dodgerblue';
let children = body.children;
console.log(children);
let navBar = children[0]
console.log(navBar)
let container = children[1]
console.log(container)
let containerChildren = container.children
console.log(containerChildren)
let header = containerChildren[0]
console.log(header)

////////////////////////////////////////////////////////////////////////////////////////////////
let navSpan = document.createElement('span');
navSpan.className = 'text-info'
navSpan.innerHTML = `To do list!`
let bar = document.getElementById('bar');
// bar.appendChild(navSpan)
let divInNav = document.querySelector('nav > div')
divInNav.append(navSpan)

let rows = document.getElementsByClassName('row');
console.log(rows)

let firstRow = rows[0]
let secondRow = rows[1]
let thirdRow = rows[20]

let mainHeader = document.createElement('h1')
mainHeader.className = 'text-center text-warning'
mainHeader.id = 'mainheader'
mainHeader.innerHTML = 'TO DO LIST'

firstRow.append(mainHeader)


let formDiv = document.createElement('div')
formDiv.className = 'row mt-5'
let formAction = document.createElement('form')
formAction.id = 'listForm'
let formGroupDiv = document.createElement('div')
formGroupDiv.className = 'form-group'

formInput1 = document.createElement('input')
formInput1.className ='form-control'
formInput1.name = 'toDo'
formInput1.type = 'text'
formInput1.placeholder = 'Enter to do task'

formInput2 = document.createElement('input')
formInput2.type ='submit'
formInput2.value = 'submit'
formInput2.className = 'btn btn-dark w-100 mt-3'

formGroupDiv.append(formInput1)
formGroupDiv.append(formInput2)
console.log(formGroupDiv)

formAction.append(formGroupDiv)

formDiv.append(formAction)
console.log(formDiv)

secondRow.append(formDiv)

/// grabing the value from a form. 
let formEvent = document.getElementById('listForm');

function handleFormSubmit(event){
    event.preventDefault();
    // console.log(event.target.toDo.value)
    let task = event.target.toDo.value;
    console.log(task)

    event.target.toDo.value = '';
}
formEvent.addEventListener('submit', handleFormSubmit)

function buildList(){
    let newList = document.createElement('li')
    newList.className = 'text-danger'
    newList.append(task)



}











let listDiv = document.createElement('div')
listDiv.id = 'list'

let list = document.createElement('li')
list.className = 'text-center'
list.innerHTML = 'To do list:'

listDiv.append(list)
console.log(listDiv)

// thirdRow.append(listDiv)




