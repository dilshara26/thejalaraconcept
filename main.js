import './style.css'

let hamburger = document.querySelector('.hamburger');
let nav_links_dropdown = document.querySelector(".nav-links-dropdown");

nav_links_dropdown.style.display = "none";

hamburger.addEventListener('click', ()=>{
    toggleVisibility();
});

function toggleVisibility(params) {
    if (nav_links_dropdown.style.display == 'block') {
        
        nav_links_dropdown.style.display = "none";
    }else{
        nav_links_dropdown.style.display = "block";
    }
}