changeLanguage('de')

function changeLanguage(language) {
    document.documentElement.lang = language;
  
    const langContents = document.querySelectorAll('.lang-content');
    langContents.forEach(content => {
      content.style.display = content.classList.contains(language) ? 'block' : 'none';
    });
  }
