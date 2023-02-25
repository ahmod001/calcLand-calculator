// Calculate Age

// Increment yearly
const IncrementYear = () => {
    const currentYear = new Date().getFullYear();

    if (currentYear > 1970) {
        for (let i = 0; i <= currentYear - 1970; i++) {
            const nowDate = i + 1970;
            document.getElementById('year').innerHTML += `<option value="${nowDate}">${nowDate}</option>`
        }
    }

}
console.log(IncrementYear());

// CountBtn event

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
        document.getElementById('age').innerHTML = `<div data-aos="fade-up"
        class="col-xl-6 col-lg-8 col-md-9 col-sm-10 col-12 rounded age-prompt">
        <div id="invoice">
            <div class="py-4" data-aos="zoom-in-up">
                <h3><span class="text-primary">Age </span>:
                    <span class="display-5 fw-bold">${Math.floor(ageInYears)}</span>
                    <span class="text-muted"> yr</span>
                </h3>
            </div>

            <div class="d-flex justify-content-center p-2">
                <table "class=" table ">
                    <tbody data-aos=" fade-up" class="text-start">
                    <!-- Month -->
                    <tr scope="row">
                        <td>
                            <h5>
                                <span class="text-primary">Months</span>
                            </h5>
                        </td>

                        <td class="px-2">
                            <h4>${Math.floor(ageInMonths)}</h4>
                        </td>
                    </tr>
                    <!-- Week -->
                    <tr scope="row">
                        <td>
                            <h5>
                                <span class="text-primary">Weeks</span>
                            </h5>
                        </td>
                        <td class="px-2">
                            <h4>${Math.floor(ageInWeeks)}</h4>
                        </td>
                    </tr>
                    <!-- Days -->
                    <tr scope="row">
                        <td>
                            <h5>
                                <span class="text-primary">Days</span>
                            </h5>
                        </td>
                        <td class="px-2">
                            <h4>${Math.floor(ageInDays)}</h4>
                        </td>
                    </tr>

                    <!-- Hr -->
                    <tr scope="row">
                        <td>
                            <h5>
                                <span class="text-primary">Hours</span>
                            </h5>
                        </td>
                        <td class="px-2">
                            <h4>${Math.floor(ageInHrs)}</h4>
                        </td>
                    </tr>

                    <!-- Min -->
                    <tr scope="row">
                        <td>
                            <h5>
                                <span class="text-primary">Minutes</span>
                            </h5>
                        </td>
                        <td class="px-2">
                            <h4>${Math.floor(ageInMins)}</h4>
                        </td>
                    </tr>
                    <!-- Sec-->
                    <tr scope="row">
                        <td>
                            <h5>
                                <span class="text-primary">Seconds</span>
                            </h5>
                        </td>
                        <td>
                            <h4>${Math.floor(ageInSecs)}</h4>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Download PDF Btn -->
        <div class="py-4" data-aos="zoom-in">
            <button class="btn btn-primary" id="download-btn" onclick="generatePDF()">
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-download" viewBox="0 0 16 16">
                    <path
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                Download</button>
        </div>
    </div>
    </div>`;

    } else {
        alert('Please, Enter a Date of birth')
    }

})

// Download PDF Btn 

function generatePDF() {

    var element = document.getElementById('invoice');
    var opt = {
        margin: 1,
        filename: 'calcLand.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }

    html2pdf().set(opt).from(element).save();
}

// Animation
AOS.init({ once: true });