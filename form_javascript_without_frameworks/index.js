let itensDiv = document.querySelector('#itens-content');
let listInput = document.querySelector('#item');
let alertDiv = document.querySelector('#alert');
let buttom = document.querySelector('#addButtom');
var totalItens = 0;

const alertDisplayTime = 4000;

function addAction(element) {
    validate() ? add(createItem(element)) : null;
}

function action(event) {
    if(event.keyCode == '13') {
        addAction(event.target.value);
    }else if (event.type == 'click') {
        addAction(listInput.value);
    }
}

listInput.addEventListener('keyup', action);
buttom.addEventListener('click', action);

function validate() {
    return listInput.value.trim() ? true : errorAlert('Field is not defined'); return false;
}

function errorAlert(message) {
    let elementExibition = alertDiv.style.display;
    elementExibition = 'block';
    alertDiv.innerHTML = `<b>${message}</b>`;

    setTimeout(function() {
        elementExibition = 'none';
    }, alertDisplayTime);

}

function createItem(description) {
    totalItens++;
    let newItemElement = document.createElement('li');
    newItemElement.setAttribute('id', `item_${totalItens}`);
    let text = document.createTextNode(description);
    newItemElement.appendChild(text);
    
    let span = document.createElement('span');
    span.innerHTML = `   <a style="cursor:pointer" onClick="remove('item_${totalItens}')">X</a>`
    newItemElement.appendChild(span);
    return newItemElement; 
}

function listExists() {
    return document.querySelector('#list-itens');
}

function createList() {
  let listDiv = document.createElement('ul');
  listDiv.setAttribute('id', 'list-itens');
  return listDiv;
}

function add(Item) {
    let list = listExists() ? listExists() : createList();
    list.appendChild(Item);
    itensDiv.appendChild(list);
}

function remove(Item) {
    let element = document.querySelector('#'+Item);
    let list = listExists();
    if (list) {
        list.removeChild(element);
        totalItens--;
    }else {
        errorAlert('Undefined list');    
    }
}

