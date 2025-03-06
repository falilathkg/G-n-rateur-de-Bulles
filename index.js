const container = document.getElementById("bubble");
const scoreDisplay = document.getElementById("score");
let score = 0;
const colors = ["red", "blue","green","yellow","purple","orange"];

function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    let size = Math.random() * 400 + 20;
    let duration = Math.random() *3 + 1;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 1000}vw`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.background = colors[Math.floor(Math.random() *colors.length)];

    bubble.addEventListener("click", () =>{
        score++;
        scoreDisplay.textContent = score;
        bubble.remove();
    });

    container.appendChild(bubble);
    setTimeout(() => bubble.remove(), duration * 1000);
}
    document.addEventListener("DOMContentLoaded", () => {
        setInterval(createBubble, 80);
    });