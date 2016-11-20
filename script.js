function resizeText(multiplier) {
    var element = document.body;
    var currentSize = element.style.fontSize || 18;
    element.style.fontSize = (parseFloat(currentSize) + (multiplier * 4)) + "px";
    element.style.lineHeight = (parseFloat(currentSize) + (multiplier) * 4) + "px";
}