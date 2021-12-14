var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var content0= document.getElementById("nav-link");
var content1 = document.getElementById("nav-link1");
var content2 = document.getElementById("nav-link2");
var content3 = document.getElementById("nav-link3");
var content4 = document.getElementById("nav-link4");
var content5 = document.getElementById("nav-link5");
const hamburger = document.querySelector(".hamburger");
sideNav.style.right="-250px";


content0.onclick=function(){
    if(sideNav.style.right == "0px"){
       sideNav.style.right ="-250px";
       hamburger.classList.remove("active");
    }
    else{
        sideNav.style.right= "0px";
    }
}
content1.onclick=function(){
    if(sideNav.style.right == "0px"){
       sideNav.style.right ="-250px";
       hamburger.classList.remove("active");
    }
    else{
        sideNav.style.right= "0px";
    }
}
content2.onclick=function(){
    if(sideNav.style.right == "0px"){
       sideNav.style.right ="-250px";
       hamburger.classList.remove("active");
    }
    else{
        sideNav.style.right= "0px";
    }
}
content3.onclick=function(){
    if(sideNav.style.right == "0px"){
       sideNav.style.right ="-250px";
       hamburger.classList.remove("active");
    }
    else{
        sideNav.style.right= "0px";
    }
}
content4.onclick=function(){
    if(sideNav.style.right == "0px"){
       sideNav.style.right ="-250px";
       hamburger.classList.remove("active");
    }
    else{
        sideNav.style.right= "0px";
    }
}
content5.onclick=function(){
    if(sideNav.style.right == "0px"){
       sideNav.style.right ="-250px";
       hamburger.classList.remove("active");
    }
    else{
        sideNav.style.right= "0px";
    }
}
menuBtn.onclick = function(){
    if(sideNav.style.right =="-250px"){
        sideNav.style.right = "0px";   
    }
    else{
        sideNav.style.right= "-250px";
    }
}



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
 
})

