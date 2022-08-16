let circles = document.getElementsByClassName("circle");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let progress = document.getElementById("progress");


let counter = 1;


function prevFun(e) {
    counter--;
    circles[counter].classList.remove("active");
    console.log(counter-1/(circles.length-1)*100 + '%');
    progress.style.width = (counter-1)/(circles.length-1)*100 + '%';
}

function nextFun(e) {
    progress.style.width = counter/(circles.length-1)*100 + '%';
    circles[counter].classList.add("active");
    counter++;
}


prev.addEventListener("click", prevFun);
next.addEventListener("click", nextFun);