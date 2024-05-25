const display = document.getElementById("Display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  const displayValue = display.value;
  if (!displayValue) {
    return;
  }
  const newDisplayValue = displayValue.slice(0, -1);
  display.value = newDisplayValue;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Err";
  }
}
