function copy(classe) {
    text = document.getElementsByClassName(classe)[0].value;
    try {
        navigator.clipboard.writeText(text);
    } catch (TypeError) {
        alert("Un problème est survenu durant la copie.<br/>Veuillez copier le texte présent sur la ligne suivant<br/>"+text);
    }
    
}
function sendto(link) {
    window.open(
        "https://"+link, "new"
    )
}