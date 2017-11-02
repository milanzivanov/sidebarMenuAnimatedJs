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
    
    // with function
    // btn.addEventListener("click", toggleMenu);
    // function toggleMenu() {
    //     btn.classList.toggle("active");
    //     nav.classList.toggle("toggle");
    // }

    // with arrow function
    btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            nav.classList.toggle("toggle");
    });
}
// with function
// window.onload = function() {
//     setUpEvents();
// }

// with arrow function
window.onload = () => {
    setUpEvents();
}