let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let color = ""

 let main = document.addEventListener('keydown', function (event){
    if (event.key == 'a') {
       color = "skyblue";
    } else if (event.key == 's') {
        color = "cornflowerblue"
    } else if (event.key == 'd') {
       color = "royalblue";
    } else if (event.key == 'f') { 
        color = "midnightblue";
    }
    pintar(box1, color);
    pintar(box2, color);
    pintar(box3, color);
    pintar(box4, color);
});

let pintar = (element, color) => {
    element.addEventListener("click", (event) =>{
        element.style.backgroundColor = color;
        console.log(click)
    })
}

