let open = document.getElementById("open");
let close = document.getElementById("close");

function openFun(){
    document.getElementsByClassName("container")[0].classList.add("show-nav");
}

function closeFun(){
    document.getElementsByClassName("container")[0].classList.remove("show-nav");
}

open.addEventListener("click", openFun);
close.addEventListener("click", closeFun);