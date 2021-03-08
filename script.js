var 1 = 0; // Start Point
var images =[];
var time = 1000;

//Image List
images[0] = './Images/banner1'
images[1] = './Images/banner2'
images[2] = './Images/banner3'
images[3] = './Images/banner4'

//Change Image
function changeImg() {
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;