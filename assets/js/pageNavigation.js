var div_about 
    = document.getElementById("div_about");
var div_works 
    = document.getElementById("div_works");
var div_experienceAndEducation 
    = document.getElementById("div_experienceAndEducation");

// Container for divs
var divArr = [
    div_about,
    div_works,
    div_experienceAndEducation,
];

// Keeping track of active div
var divIndex = 0;

function hideAll() {
    for (var i = 0; i < divArr.length; i++) {
        divArr[i].style.display = "none";
    }
}

function showElement(i) {
    divArr[i].style.display = "block";
}

function buttonClick(i) {
    hideAll();
    divIndex = i;
    showElement(divIndex);
}



// Start by initializing the page
buttonClick(0);

// About
$(function() {
    $("#btn_about").on("click", function() {
        buttonClick(0);
    });
});

// Works
$(function() {
    $("#btn_works").on("click", function() {
        buttonClick(1);
    });
});

// Experience & Education
$(function() {
    $("#btn_experience-and-education").on("click", function() {
        buttonClick(2);
    });
});