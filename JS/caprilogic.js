function ImgDisplay(index) {
    var items = document.getElementsByClassName("segment3-container");
    var item = items[index];
    item.classList.add("big");
    document.getElementById("backgroundblur").style.display = "block";

    items = document.getElementsByClassName("imgclose");
    item = items[index];
    item.style.display = "flex";
}

function ImgHide(index) {
    var items = document.getElementsByClassName("segment3-container");
    var item = items[index];
    item.classList.remove("big");
    document.getElementById("backgroundblur").style.display = "none";

    items = document.getElementsByClassName("imgclose");
    item = items[index];
    item.style.display = "none";
}
