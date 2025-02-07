document.addEventListener("DOMContentLoaded", function () {
    const leafContainer = document.getElementById("leaf-container");

    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");

        // Random horizontal position
        leaf.style.left = Math.random() * 100 + "vw";

        // Random animation duration (makes some fall faster)
        const duration = Math.random() * 3 + 5; // Between 5-8 seconds
        leaf.style.animationDuration = duration + "s";

        // Add leaf to container
        leafContainer.appendChild(leaf);

        // Remove leaf after it falls
        setTimeout(() => {
            leaf.remove();
        }, duration * 1000);
    }

    // Generate leaves every 500 milliseconds
    setInterval(createLeaf, 500);
});