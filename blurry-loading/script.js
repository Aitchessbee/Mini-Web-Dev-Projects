let percent = document.getElementsByClassName("percent")[0];
let body = document.getElementsByTagName("body")[0];
console.log(body);

let int = setInterval(loading, 30);
let load = 0;

function loading() {
    load++;

    if(load>99){
        clearInterval(int);
    }

    percent.innerHTML = load + '%';
    body.style.backdropFilter = "blur("+(100-load)/100*30+"px)";
    percent.style.opacity = (100-load)/100;
}