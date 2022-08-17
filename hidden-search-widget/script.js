let searchBox = document.getElementById("search-box");
let searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", ()=>{
    // searchBox.style.display = "block";
    searchBox.classList.toggle("show-box");
    searchBox.focus();
})
