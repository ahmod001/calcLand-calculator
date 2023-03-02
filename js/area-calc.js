// Area Calculator 

const measureBtn = document.getElementById('measure-btn').addEventListener('click', () => {

    const inputMeasureUnit = document.getElementById('measure-unit-selected').value;
    const inputValue = document.getElementById('area-size-input').value;
    let result = document.getElementById('acres-prompt');


    // Conditions
    if (inputValue > 0) {

        const condition = inputMeasureUnit == 1 ? result.value = (Number.parseInt(inputValue) * 0.00024710538).toFixed(1) : result.value = (Number.parseInt(inputValue) * 2.47105).toFixed(1);
    }
    else if (inputValue < 0) {
        alert('Negative values are not eligible')
    } else {
        alert('Please, enter area size!')
    }

})

// Animation
AOS.init({ once: true });