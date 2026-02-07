const text = "Happy Birthday My Love ❤️";
let index = 0;
const typingElement = document.getElementById("typingText");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

function startSurprise() {
    document.getElementById("bgMusic").play();
    document.getElementById("story").scrollIntoView({ behavior: "smooth" });
}

function goToMemories() {
    document.getElementById("memories").scrollIntoView({ behavior: "smooth" });
}

function goToLetter() {
    document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
}

function revealLetter() {
    document.getElementById("loveLetter").classList.remove("hidden");
}
