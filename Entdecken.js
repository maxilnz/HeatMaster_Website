function rotateCard(clickedDiv) {
    var cardElement = clickedDiv.closest('.card');
    cardElement.style.transform = "rotateY(180deg)";
    cardElement.style.transition = "transform 0.5s ease"; 
}

function rotateCardback(clickedDiv) {
    var cardElement = clickedDiv.closest('.card');
    cardElement.style.transform = "rotateY(360deg)";
    cardElement.style.transition = "transform 0.5s ease"; 
}
