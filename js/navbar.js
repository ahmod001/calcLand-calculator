// Navbar ===
document.getElementById('nav-bar').innerHTML = `
<nav class="navbar navbar-expand-lg shadow-sm z-3 bg-primary fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand text-light px-xl-3" href="index.html"><img src="css/images/logo.png" alt="" style="height:5vh;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item mx-2">
                    <a class="nav-link active text-light" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-light" href="base-calc.html">Base Converter</a>
                </li>
                <li class="nav-item  mx-2">
                    <a class="nav-link text-light" href="age-calc.html">Age Calculator</a>
                </li>
                <li class="nav-item  mx-2">
                    <a class="nav-link text-light" href="area-calc.html">Area Calculator</a>
                </li>

                <li class="nav-item mx-2">
                    <a class="nav-link text-light" href="about.html">About</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;
