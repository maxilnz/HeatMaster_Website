mybutton = document.getElementById("back_to_top");
mybutton.style.display = "none";

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollThreshold = window.innerHeight * 1;
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
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

function openLink(url, id) {
    var link = document.getElementById(id);
    if (link) {
        window.open(url, link.target);
    }
}
