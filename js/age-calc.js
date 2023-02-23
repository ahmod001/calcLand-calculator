// Calculate Age

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

        const ageInDays = difference / 1000 / 60 / 60 / 24;
        const ageInMonths = ageInDays / 30;
        const ageInYears = ageInMonths / 12;

        // DOM
        document.getElementById('age').innerHTML = `<p><strong class="text-secondary">${Number.parseInt(ageInYears)}</strong> Years </p>`;

    } else {
        alert('error!')
    }



})



// Animation
AOS.init();