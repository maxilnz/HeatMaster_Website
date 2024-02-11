mybutton = document.getElementById("back_to_top");

mybutton.style.display = "none";

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function changeMobileLanguage() {
    if (document.getElementById("language_mobile_input_id_de").checked === true ) {
        document.getElementById("language_mobile_label_id_de").style.display = "none"
        document.getElementById("language_mobile_label_id_en").style.display = "flex"
    } else {
        document.getElementById("language_mobile_label_id_en").style.display = "none"
        document.getElementById("language_mobile_label_id_de").style.display = "flex"
    }
}
