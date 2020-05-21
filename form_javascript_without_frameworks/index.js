let itensDiv = document.querySelector('#itens-content');
let listInput = document.querySelector('#item');
let alertDiv = document.querySelector('#alert');

const alertDisplayTime = 4000;

listInput.addEventListener('keyup', function (event) {
    if(event.keyCode == '13') 
        validate() ? add(createItem(event.target.value)) : null;
    
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
    let newItemElement = document.createElement('li');
    let text = document.createTextNode(description);
    newItemElement.appendChild(text);
    return newItemElement; 
}

function checkListExists() {
    return document.querySelector('#list-itens');
}

function createList() {
  let listDiv = document.createElement('ul');
  listDiv.setAttribute('id', '#list-itens');
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

