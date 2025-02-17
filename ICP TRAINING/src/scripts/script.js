/*
    Full Name: Tongol, Jenica Sarah B.
    Section: CS-204
    Activity: Fitness
    Date: September 28, 2024

    */


//Global Variable
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger Menu Function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Function to display the burpee example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the mountain climbers example video
function mountain() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display promo code
function discount() {
    var promo = document.getElementById('special');
    promo.firstChild.nodeValue = "PromoCode: D25START";
    promo.style.color = "#FF0000";
    promo.style.fontSize = "2em";

}


