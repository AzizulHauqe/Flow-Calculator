const resultInput = document.getElementById('result');
const prevOpText = document.getElementById('prev-op');

function insert(val) {
    resultInput.value += val;
}

function clearScreen() {
    resultInput.value = "";
    prevOpText.innerText = "";
}

function del() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function equal() {
    try {
        let expression = resultInput.value;
        let solved = eval(expression);
        prevOpText.innerText = expression + " =";
        resultInput.value = solved;
    } catch (e) {
        resultInput.value = "ERROR";
        setTimeout(clearScreen, 1000);
    }
}