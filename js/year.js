var setCurrentYear = () => {
    var footerYear = document.getElementById("footer-year");
    var currentYear = new Date().getFullYear();

    footerYear.innerHTML = currentYear;
};

setCurrentYear();