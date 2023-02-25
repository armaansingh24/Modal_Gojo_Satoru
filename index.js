const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

// Modal open funtion
const openModal=()=>{
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

const closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

let play=document.getElementById("#play");
let audio= new Audio("audio.mp3");
function playMusic(){
    audio.play();
}

function stopMusic(){
    audio.pause();
    audio.currentTime = 0;
}
