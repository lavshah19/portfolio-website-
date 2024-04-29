let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll("header nav a");
let sections = document.querySelectorAll("section");

menuIcon.onclick =()=>{
   menuIcon.classList.toggle('fa-x');
   navbar.classList.toggle('active');
}