console.log('working');


let menu = document.querySelector("#menu-btn");
let link = document.querySelector(".left");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    link.classList.toggle('active');
    console.log('Clicked');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    link.classList.remove('active');
}