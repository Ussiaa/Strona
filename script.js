function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle("nav_dark");

    var enabled=element.classList.contains("dark-mode");
    window.localStorage.setItem("theme", enabled);
  }

document.addEventListener("DOMContentLoaded", ()=>{
  if (window.localStorage.getItem("theme")=="true"){
    var element = document.body;
    element.classList.add("dark-mode");
    element.classList.add("nav_dark");
    console.log('ciekawe_czy_dziala');
  } 
});