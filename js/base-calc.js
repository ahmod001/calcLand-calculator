// BASE Converter

//  Global variables
const title = document.getElementById('title');
let decimalInput = document.getElementById('decimal-input');
const baseSelectPrompt = document.getElementById('base-input');
const convertBase = document.getElementById('convertBase');

// CONVERT Btn event===
const convertBtnEvent = () => {
    const decimal = parseInt(decimalInput.value);
    const baseSelected = document.getElementById('base-selected').value;
    let convertedValue = 'Error!';

    // Converted from decimal
    const condition = baseSelected == 1 ? convertedValue = decimal.toString(2) : baseSelected == 2 ? convertedValue = decimal.toString(8) : baseSelected == 3 ? convertedValue = decimal.toString(16) : false;

    // Change the prompt
    if (decimalInput.value >= 0 && decimalInput.value != '') {
        convertBase.innerHTML = `
            <div class="row" data-aos="zoom-in">
                <div class="col-6">
                    <button onclick="resetBtnEvent()"class="btn btn-warning px-4">Reset</button>
                </div>
                <div class="col-6">
                    <button onclick="copyBtnEvent('result-prompt')"
                    class="btn btn-secondary px-4">Copy</button>
                </div>
            </div>`;

        baseSelectPrompt.innerHTML = `
    <div class="py-2" data-aos="fade-right" data-aos-delay="10">
    <label for="base">Result :</label>
        <input id="result-prompt" class="form-control" type="text">
    </div>`;

        // DOM
        title.innerHTML = `<h3 class="text-center">Base <span class ="text-primary ">converted</span></h3>`;
        document.getElementById('result-prompt').value = convertedValue;

    }
    else if (decimalInput.value < 0) {
        alert('Negative numbers are not eligible')
    }
    else {
        alert('Please, enter a number')
    }
}

// Copy-Text function here===
const copyBtnEvent = (id) => {
    const copyText = document.getElementById(id);

    if (copyText.value != '' && copyText.value >= 0) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(`${copyText.value}\nhttps://ahmod001.github.io/calculator/index.html`);

        alert("Copied");
    }
}

// RESET Btn event===
const resetBtnEvent = () => {
    // Default Prompt
    decimalInput.value = '';

    // DOM reset
    title.innerHTML = `<h3 class="text-primary text-center">Base converter</h3>`;

    baseSelectPrompt.innerHTML = `<div data-aos="fade-left">
    <label for="base-selected">Select base :</label>
    <select id="base-selected" class="form-select form-select-md mb-3"
        aria-label=".form-select-lg example">
        <option value="1">Binary</option>
        <option value="2">Octal</option>
        <option value="3">Hexa</option>
    </select>
    </div>`

    convertBase.innerHTML = `<button onclick="convertBtnEvent()" data-aos="zoom-in" data-aos-delay="10" class="btn btn-primary"><strong>Convert</strong></button>`
}

// Animation
AOS.init({ once: true });