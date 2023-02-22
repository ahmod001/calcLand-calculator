// Navbar ===

document.getElementById('nav-bar').innerHTML = ` 
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand px-xl-3" href="#">Calc<span class="text-primary">Land</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item  mx-2">
                    <a class="nav-link" href="base-calc.html">Base Converter</a>
                </li>
                <li class="nav-item  mx-2">
                    <a class="nav-link" href="#">Age Calculator</a>
                </li>
                <li class="nav-item  mx-2">
                    <a class="nav-link" href="#">Land Calculator</a>
                </li>

                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;