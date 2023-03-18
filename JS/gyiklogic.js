/*function questionOpen(index) {
    var items = document.getElementsByClassName("segment2-answer");
    var itemnumber = document.getElementsByClassName("segment2-question").length;
    for (i = 0; i < itemnumber; i++) {
        if (i != index) {
            var item = items[i];
            item.style.display = "none";
            document.getElementsByClassName("segment2-question-plus")[i].style.display = "block";
            document.getElementsByClassName("segment2-question-minus")[i].style.display = "none";

        }
        else {
            var item = items[i];
            item.style.display = "block";
            document.getElementsByClassName("segment2-question-plus")[i].style.display = "none";
            document.getElementsByClassName("segment2-question-minus")[i].style.display = "block";
        }



    }
}


function questionclose(index) {
    var items = document.getElementsByClassName("segment2-answer");
    for (i = 0; i < items.length; i++) {
        var item = items[i];
        item.style.display = "none";
        document.getElementsByClassName("segment2-question-plus")[i].style.display = "block";
        document.getElementsByClassName("segment2-question-minus")[i].style.display = "none";


    }
}
*/
var activeItem = 10000;
var isActive = false;

function question(index) {

    var items = document.getElementsByClassName("segment2-answer");
    
    if (isActive == true && activeItem == index) {
        for (i = 0; i < items.length; i++) {
            activeItem = 10000;
            isActive = false;
            var item = items[i];
            item.style.display = "none";
            document.getElementsByClassName("segment2-question-plus")[i].style.display = "block";
            document.getElementsByClassName("segment2-question-minus")[i].style.display = "none";
        }
    } 
    else if (isActive == true && activeItem != index) {
        for (i = 0; i < items.length; i++) {
            if (i == index) {
                var item = items[i];
                item.style.display = "block";
                document.getElementsByClassName("segment2-question-plus")[i].style.display = "none";
                document.getElementsByClassName("segment2-question-minus")[i].style.display = "block";
                isActive = true;
                activeItem = index;
            }
            else {
                var item = items[i];
                item.style.display = "none";
                document.getElementsByClassName("segment2-question-plus")[i].style.display = "block";
                document.getElementsByClassName("segment2-question-minus")[i].style.display = "none";
            }
        }
    }
    else if (isActive == false && activeItem == 10000) {
        var item = items[index];
        item.style.display = "block";
        document.getElementsByClassName("segment2-question-plus")[index].style.display = "none";
        document.getElementsByClassName("segment2-question-minus")[index].style.display = "block";
        activeItem = index;
        isActive = true;

    }
     
}