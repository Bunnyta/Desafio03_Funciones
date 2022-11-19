//  function pintar(){
//      ele = document.getElementById("ele1")
//      ele.style.backgroundColor = 'yellow'
//      }
   
//     ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);

let ele = document.querySelector ('#ele1');

function pintar(color = 'green') {
    ele.style.backgroundColor = color;
};
pintar();

ele.addEventListener("click", function() { 
    pintar("yellow");
});


