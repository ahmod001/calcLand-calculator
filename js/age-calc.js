// Calculate Age
//  Increment yearly function
const IncrementYear = () => {
    const currentYear = new Date().getFullYear();

    if (currentYear > 1970) {
        for (let i = 0; i <= currentYear - 1970; i++) {
            const nowDate = i + 1970;
            document.getElementById('year').innerHTML += `<option value="${nowDate}">${nowDate}</option>`
        }
    }
}
IncrementYear();

//  Calculate Btn event
const countAgeBtn = document.getElementById('count-age').addEventListener('click', () => {
    const birthDate = new Date()

    // Formate date
    const birthDay = Number.parseInt(document.getElementById('date').value);
    const birthMonth = Number.parseInt(document.getElementById('month').value);
    const birthYear = Number.parseInt(document.getElementById('year').value);

    birthDate.setDate(birthDay);
    birthDate.setMonth(birthMonth);
    birthDate.setFullYear(birthYear);

    const difference = Date.now() - birthDate.getTime();
    if (difference >= 86400000) {

        // Converted from ms
        const ageInSecs = difference / 1000;
        const ageInMins = ageInSecs / 60;
        const ageInHrs = ageInMins / 60;
        const ageInDays = ageInHrs / 24;
        const ageInWeeks = ageInDays / 7;
        const ageInMonths = ageInDays / 30;
        const ageInYears = ageInDays / 365;

        // DOM
        document.getElementById('age').innerHTML = `
        <div id="invoice" data-aos="fade-left">
            <div class="py-3" data-aos="fade-left">
                <h5><span class="text-primary">Age </span>: 
                    <span class="display-6 fw-bold">${Math.floor(ageInYears)}</span>
                    <span class="text-muted"> Yr</span>
                </h5>
            </div>

            <div class="d-flex justify-content-center ">
                <table class=" table border w-75">
                    <tbody data-aos="fade-left">
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
        <div class="pb-3">
            <button data-aos="fade-left" class="btn btn-primary" id="download-btn" onclick="generatePDF()">
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" fill="currentColor"
                    class="bi bi-download" viewBox="0 0 16 16">
                    <path
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                Download</button>
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

// Animation
AOS.init({ once: true });