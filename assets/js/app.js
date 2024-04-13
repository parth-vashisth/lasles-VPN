let navicon = document.querySelector(".nav-icon");
let lgview = document.querySelector(".lg-view");
navicon.addEventListener("click", () => {
    lgview.classList.toggle("show");
});