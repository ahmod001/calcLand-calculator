// Calculate Age
// Increment yearly function
const IncrementYear = () => {
    const currentYear = new Date().getFullYear();

    if (currentYear > 1970) {
        for (let i = 0; i <= currentYear - 1970; i++) {
            const nowDate = i + 1970; document.getElementById('year').innerHTML
                += `<option value="${nowDate}">${nowDate}</option>`
        }
    }
}
IncrementYear();

// Calculate Btn event
const countAgeBtn = document.getElementById('count-age').addEventListener('click', () => {
    const birthDate = new Date();
    // Formate date
    const birthDay = Number.parseInt(document.getElementById('date').value);
    const birthMonth = Number.parseInt(document.getElementById('month').value);
    const birthYear = Number.parseInt(document.getElementById('year').value);

    birthDate.setDate(birthDay);
    birthDate.setMonth(birthMonth - 1);
    birthDate.setFullYear(birthYear);

    const today = new Date();
    let difference = today.getTime() - birthDate.getTime();

    if (difference >= 86400000) {

        // Converted from ms
        const ageInSecs = Math.floor(difference / 1000);
        const ageInMins = Math.floor(ageInSecs / 60);
        const ageInHrs = Math.floor(ageInMins / 60);
        const ageInDays = Math.floor(ageInHrs / 24);
        const ageInWeeks = Math.floor(ageInDays / 7);
        const ageInMonths = (today.getMonth() + 12 * today.getFullYear()) - (birthDate.getMonth() + 12 * birthDate.getFullYear());
        const ageInYears = Math.floor(ageInDays / 365);

        // Result age 
        let year = Math.floor(ageInDays / 365);
        const month = (ageInMonths + 12) % 12;
        const days = today.getDate() - birthDate.getDate();

        // DOM
        document.getElementById('age').innerHTML = `
        <div>
        </div>
    <div id="invoice" data-aos="fade-left">
        <div class="py-3" data-aos="fade-left">
            <h4 class="text-center"><span class="text-primary">Age</span>:
                ${year} <span class="text-muted">year</span> ${month} <span class="text-muted">month</span> ${days} <span class="text-muted">days</span>
            </h4>
        </div>

        <div class="d-flex justify-content-center ">
            <table class="border table w-75">
                <thead data-aos="fade-left">
                    <th colspan="2" class="text-primary">Total</th>
                </thead>
                <tbody data-aos="fade-left">
                    <!-- Year -->
                    <tr scope="row">
                        <td>
                            <h6>
                                <span class="text-primary">Years</span>
                            </h6>
                        </td>

                        <td>
                            <h6>${Math.floor(ageInYears)}</h6>
                        </td>
                    </tr>
                    <!-- Month -->
                    <tr scope="row">
                        <td>
                            <h6>
                                <span class="text-primary">Months</span>
                            </h6>
                        </td>

                        <td>
                            <h6>${Math.floor(ageInMonths)}</h6>
                        </td>
                    </tr>
                    <!-- Week -->
                    <tr scope="row">
                        <td>
                            <h6>
                                <span class="text-primary">Weeks</span>
                            </h6>
                        </td>
                        <td>
                            <h6>${Math.floor(ageInWeeks)}</h6>
                        </td>
                    </tr>
                    <!-- Days -->
                    <tr scope="row">
                        <td>
                            <h6>
                                <span class="text-primary">Days</span>
                            </h6>
                        </td>
                        <td>
                            <h6>${Math.floor(ageInDays)}</h6>
                        </td>
                    </tr>

                    <!-- Hr -->
                    <tr scope="row">
                        <td>
                            <h6>
                                <span class="text-primary">Hours</span>
                            </h6>
                        </td>
                        <td>
                            <h6>${Math.floor(ageInHrs)}</h6>
                        </td>
                    </tr>

                    <!-- Min -->
                    <tr scope="row">
                        <td>
                            <h6>
                                <span class="text-primary">Minutes</span>
                            </h6>
                        </td>
                        <td>
                            <h6>${Math.floor(ageInMins)}</h6>
                        </td>
                    </tr>
                    <!-- Sec-->
                    <tr scope="row">
                        <td>
                            <h6>
                                <span class="text-primary">Seconds</span>
                            </h6>
                        </td>
                        <td>
                            <h6>${Math.floor(ageInSecs)}</h6>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Download PDF Btn -->
    <div class="">
        <div class="row" data-aos="fade-left">
               <div class="col-6 text-end">
               <button class="btn btn-primary" onclick="generatePDF()">
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor"
                   class="bi bi-download" viewBox="0 0 16 16">
                   <path
                       d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                   <path
                       d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
               </svg>
                   PDF</button>
               </div>

                <div class="col-6 text-start">
                     <button onclick="CopyToClipboard('invoice')" class="btn btn-secondary px-3">Copy</button>
                </div>
        </div>
        </div>`;

    } else {
        alert('Please, Enter date of birth !')
    }

})

// Download PDF Btn
const generatePDF = () => {
    var element = document.getElementById('invoice');
    var opt = {
        margin: 1,
        filename: 'calcLand.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }

    html2pdf().set(opt).from(element).save();
}
// Copy button Event handler
function CopyToClipboard(elementId) {

    const tempTextArea = document.createElement("textarea");

    const targetElement = document.getElementById(elementId);
    tempTextArea.value = `${targetElement.innerText}\nhttps://ahmod001.github.io/calculator/index.html`;

    document.body.appendChild(tempTextArea);
    tempTextArea.select();

    document.execCommand("copy");

    document.body.removeChild(tempTextArea);
    alert('Copied')
}

// Animation
AOS.init({ once: true });