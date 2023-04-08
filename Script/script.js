var show = document.getElementById("show");
var close = document.getElementById("close");

var hide_button =document.getElementById("header__navigation__second");


console.log("Hellow")

function show_close(){
    show.addEventListener("click", function run(){

        hide_button.style.display="block";
        close.style.display="block"
        show.style.display="none"
    });
    // close.addEventListener("click", function run(){
        
    //     hide_button.style.display="none";
    //     show.style.display="block"
    //     close.style.display="none"
    // });


}