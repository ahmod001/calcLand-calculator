// Display all inputs 
let inputDisplay = document.getElementById('display-input');

// Digit & Action Event-listener
const buttonEvent = (id, boolean) => {
    const btn = document.getElementById(id);

    if (boolean === true) {

        btn.addEventListener('click', () => {
            return inputDisplay.value = '';
        })
    }
    btn.addEventListener('click', () => {
        return inputDisplay.value += btn.value;
    })
}
// Digits here
const seven = buttonEvent('btn-7');
const eight = buttonEvent('btn-8');
const nine = buttonEvent('btn-9');
const four = buttonEvent('btn-4');
const five = buttonEvent('btn-5');
const six = buttonEvent('btn-6');
const three = buttonEvent('btn-3');
const two = buttonEvent('btn-2');
const one = buttonEvent('btn-1');
const zero = buttonEvent('btn-0');
const point = buttonEvent('btn-point');

// Action buttons
const divide = buttonEvent('btn-action-divide');
const minus = buttonEvent('btn-action-minus');
const plus = buttonEvent('btn-action-plus');
const multiply = buttonEvent('btn-action-multiply');
//     clear all btn 
const cutEverythingBtn = buttonEvent('btn-action-C', true);

// EQUAL Btn
document.getElementById('btn-action-equal').addEventListener('click', () => {
    inputDisplay.value = eval(inputDisplay.value);
})



// Animation
AOS.init();