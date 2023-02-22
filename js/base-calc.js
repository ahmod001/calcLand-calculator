// BASE Converter

//  Global variables
const title = document.getElementById('title');
const decimalInput = document.getElementById('decimal-input');
const baseSelectPrompt = document.getElementById('base-input');
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');

// CONVERT Btn event===
document.getElementById('convert-btn').addEventListener('click', () => {
    const decimal = parseInt(decimalInput.value);
    const baseSelected = document.getElementById('base-selected').value;
    let convertedValue = 'Error!';

    // Converted from decimal
    const condition = baseSelected == 1 ? convertedValue = decimal.toString(2) : baseSelected == 2 ? convertedValue = decimal.toString(8) : baseSelected == 3 ? convertedValue = decimal.toString(16) : false;

    // Change the prompt
    baseSelectPrompt.style.display = 'none';
    result.style.display = 'block';
    document.getElementById('convert-btn').style.display = 'none';
    resetBtn.style.display = 'block';

    // DOM
    title.innerHTML = `<h3 class="text-center">Base <span class ="text-primary ">converted</span></h3>`;
    document.getElementById('result-prompt').value = convertedValue;
})

// RESET Btn event===

resetBtn.addEventListener('click', () => {

    // Default Prompt
    baseSelectPrompt.style.display = 'block';
    result.style.display = 'none';
    document.getElementById('convert-btn').style.display = 'block';
    resetBtn.style.display = 'none';
    decimalInput.value = '';

    // DOM reset
    title.innerHTML = `<h3 class="text-primary text-center">Base converter</h3>`;
    document.getElementById('result-prompt').value = '';
})



// Animation
AOS.init();