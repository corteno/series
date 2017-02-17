var searchField = document.getElementById("search-field");
var label = document.getElementById("search-label");

label.addEventListener("click", () => {
    if(!hasClass(searchField, "search-field-open")){
        searchField.className += " search-field-open";
        searchField.focus();
    } else {
        searchField.className = "search-field";
    }



});

searchField.addEventListener("blur", () => {
    if(hasClass(searchField, "search-field-open")){
        searchField.className = "search-field";

    }

});


function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}