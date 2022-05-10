function copy(classe) {
    text = document.getElementsByClassName(classe)[0].value;
    navigator.clipboard.writeText(text);
}
function sendto(link) {
    window.open(
        "https://"+link, "new"
    )
}