let itensDiv = document.querySelector('#itens-content');
let listInput = document.querySelector('#item');
let alertDiv = document.querySelector('#alert');

const alertDisplayTime = 4000;

listInput.addEventListener('keyup', function (event) {
    if(event.keyCode == '13') {
        validate();
    }
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
    alertDiv.style.display = 'block';
    alertDiv.innerHTML = `<b>${message}</b>`;

    setTimeout(function() {
        alertDiv.style.display = 'none';
    }, alertDisplayTime);

}

function addItem(description) {
    
}

