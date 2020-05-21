let itensDiv = document.querySelector('#itens-content');
let listInput = document.querySelector('#item');
let alertDiv = document.querySelector('#alert');
let buttom = document.querySelector('#addButtom');
var totalItens = 0;

const alertDisplayTime = 4000;

function addAction(event) {
    if(event.keyCode == '13') 
        validate() ? add(createItem(event.target.value)) : null;
}

listInput.addEventListener('keyup', addAction);

buttom.addEventListener('click', function(event) {
    validate() ? add(createItem(listInput.value)) : null;
});

function validate() {
    if(listInput.value.trim()) {
        return true;
    }else {
        errorAlert('Input is not defined');
        return false;
    }
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
    span.innerHTML = `   <a style="cursor:pointer" onClick="remove('item_${totalItens}')">remover</a>`
    newItemElement.appendChild(span);
    return newItemElement; 
}

function checkListExists() {
    return document.querySelector('#list-itens');
}

function createList() {
  let listDiv = document.createElement('ul');
  listDiv.setAttribute('id', 'list-itens');
  return listDiv;
}

function add(Item) {
    let list = checkListExists();
    if (list) {
        list.appendChild(Item);
    }else {
        list = createList();
        list.appendChild(Item);
    }
    itensDiv.appendChild(list);
}

function remove(Item) {
    let element = document.querySelector('#'+Item);
    let list = checkListExists();
    if (list) {
        list.removeChild(element);
        totalItens--;
    }else {
        errorAlert('Undefined list');    
    }
    
}

