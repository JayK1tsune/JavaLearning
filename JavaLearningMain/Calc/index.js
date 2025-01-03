
let sumEl = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()


function getInputValues() {
    const num1 = parseFloat(document.getElementById("num1-el").value)
    const num2 = parseFloat(document.getElementById("num2-el").value)
    return{num1, num2}
}

function Add() {
    const {num1, num2} = getInputValues()
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}
function Subtract() {
    const {num1, num2} = getInputValues()
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}
function Divide() {
    const {num1, num2} = getInputValues()
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}
function Multiply() {
    const {num1, num2} = getInputValues()
    let result = num1 * num2
    if(num1 == 0 || num2 == 0) {
        sumEl.textContent = "Cannot multiply by 0"
    } else {
        sumEl.textContent = "Sum: " + result
    }
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
