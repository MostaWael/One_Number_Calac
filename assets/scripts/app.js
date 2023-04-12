const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculatatioType(type) {
  const enteredNumber = getUserNumberInput();
  if (
    (type !== "ADD" &&
      type !== "SUBTRACT" &&
      type !== "MULTIPLY" &&
      type !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (type === "ADD") {
    mathOperator = "+";
    currentResult += enteredNumber;
  } else if (type === "SUBTRACT") {
    mathOperator = "-";
    currentResult -= enteredNumber;
  } else if (type === "MULTIPLY") {
    mathOperator = "*";
    currentResult *= enteredNumber;
  } else if (type === "DIVIDE") {
    mathOperator = "/";
    currentResult /= enteredNumber;
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(type, initialResult, enteredNumber, currentResult);
}

function add() {
  calculatatioType("ADD");
}

function subtract() {
  calculatatioType("SUBTRACT");
}

function multiply() {
  calculatatioType("MULTIPLY");
}

function divide() {
  calculatatioType("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
