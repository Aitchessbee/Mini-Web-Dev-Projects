let panels = document.getElementsByClassName("panel");

function expand(e){
    for(let i=0; i<panels.length; i++){
        panels[i].classList.remove("active");
    }

    e.target.classList.add("active");

}


for(let i=0; i<panels.length; i++){
    panels[i].addEventListener("click", expand);
}