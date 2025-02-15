function startGame() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = "start.html";
    }, 800); // Matches fade-out animation duration
}