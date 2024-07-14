let displayValue = '0';

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(val) {
    if (displayValue === '0') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}