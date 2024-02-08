changeLanguage('de')

function changeLanguage(language) {
    document.documentElement.lang = language;
  
    const langContents = document.querySelectorAll('.lang-content');
    langContents.forEach(content => {
      content.style.display = content.classList.contains(language) ? 'block' : 'none';
    });
  }

  function closeNav(){
    document.getElementById("toggle_button").checked = false;
    document.getElementById("close_button").checked = true;
}

function hideArrow() {
  document.getElementById("arrow_down").style.display = "none";
}

function showArrow() {
  document.getElementById("arrow_down").style.display = "block";
}
