// jQuery
// $(document).ready(function() {
//     $(".sidebarBtn").on("click", function(){
//         $(".sidebar").toggleClass("active");
//         $(".sidebarBtn").toggleClass("toggle");
//     });
// });

// js
function setUpEvents() {
    let btn = document.querySelector(".sidebar");
    let nav = document.querySelector(".sidebarBtn");
    
    btn.addEventListener("click", toggleMenu);
    function toggleMenu() {
        btn.classList.toggle("active");
        nav.classList.toggle("toggle");
    }
}
window.onload = function() {
    setUpEvents();
}