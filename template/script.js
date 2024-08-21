const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector('.screen-overlay');

//Toggle sidebar visibility when menu button are clicked
menuButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        document.body.classList.toggle('sidebar-hidden')
    });
});

screenOverlay.addEventListener('click', ()=>{
    document.body.classList.toggle("sidebar-hidden");
});

if(window.innerWidth >= 760){
    document.body.classList.remove("sidebar-hidden")
}