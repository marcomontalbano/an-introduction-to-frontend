
// Greet
function onClickHandler() {
    alert('Hello World!');
};
var greetElement = document.getElementById('greet');
greetElement.addEventListener('click', onClickHandler);


// Ajax
function doAjax() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'ajax-data.html');
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert(xhr.responseText);
            } else {
                alert('Error: ' + xhr.status);
            }
        }
    }
};
var ajaxElement = document.getElementById('ajax');
ajaxElement.addEventListener('click', doAjax);


// Replace HTML
function replaceHtml() {
    var element = this;
    var parentNode = element.parentNode;
    var prevNode = parentNode.previousElementSibling;
    prevNode.textContent = "Hello World!";
};
var replaceElement = document.getElementById('replace-html');
replaceElement.addEventListener('click', replaceHtml);
