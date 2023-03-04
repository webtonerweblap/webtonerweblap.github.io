//Upicon display

window.addEventListener("scroll", upicondisplay);


function upicondisplay () {
    if (window.scrollY > 150) {
        document.getElementById("upicon").style.opacity = 1;
    }
    else {
        document.getElementById("upicon").style.opacity = 0;
    }
}



//Reveal items


window.addEventListener("scroll", reveal);

function reveal () {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++){

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop <windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
        /*else {
            reveals[i].classList.remove("active");

        }*/
    }
}


function contactClose() {
    document.getElementById("contactinfo").style.display = "none";
}


//Toggle menu


var menuStatus = 1;

function ToggleMenu() {
    if (menuStatus % 2 == 0) {
        document.getElementById("mobile-navbar").style.display = "none";
    }
    else {
        document.getElementById("mobile-navbar").style.display = "flex";

    }
    menuStatus++;
}