

function SliderActivate(index) {
    var elements = document.getElementsByClassName("sliderTitle");
    element = elements[index];
    element.classList.add("active");


    elements2 = document.getElementsByClassName("segment2-item-container");
    element2 = elements2[index];
    element2.style.display = "block"; 

    for (var i = 0; i < document.getElementsByClassName("sliderTitle").length; i++) {
        if (index != i) {
            element = elements[i];
            element.classList.remove("active");

            elements2 = document.getElementsByClassName("segment2-item-container");
            element2 = elements2[i];
            element2.style.display = "none"; 

        }
    }
}



