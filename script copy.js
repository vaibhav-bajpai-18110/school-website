// LIVE CLOCK

setInterval(() => {

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML = time;

}, 1000);



// DARK MODE

let themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

    document.body.classList.toggle("dark-mode");

}



// TYPING EFFECT

let text = "Education • Discipline • Success";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.getElementById("typingText").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,100);

    }

}

document.getElementById("typingText").innerHTML = "";

typeEffect();



// ANIMATED COUNTERS

let counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    let target = parseInt(counter.innerText);

    let count = 0;

    function updateCounter(){

        if(count < target){

            count += Math.ceil(target / 100);

            counter.innerText = count + "+";

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});



// FORM SUBMIT MESSAGE

let form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Admission Form Submitted Successfully!");

});



// SMOOTH SCROLL EFFECT

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});



// HERO BUTTON MESSAGE

let heroBtn = document.querySelector(".overlay button");

heroBtn.onclick = function(){

    alert("Welcome To Bright Future School 🚀");

};



// GALLERY IMAGE CLICK EFFECT

let galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        img.style.transform = "scale(1.1)";

        setTimeout(() => {

            img.style.transform = "scale(1)";

        },300);

    });

});



// LOADING EFFECT

window.onload = function(){

    console.log("School Website Loaded Successfully 🚀");

};