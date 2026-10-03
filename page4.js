
document.addEventListener("DOMContentLoaded", function () {

    const starsContainer = document.getElementById("stars");

    // Membuat bintang-bintang
    if (starsContainer) {
        for (let i = 0; i < 90; i++) {

            const star = document.createElement("span");

            star.classList.add("star");

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";

            const size = Math.random() * 2 + 1;

            star.style.width = size + "px";
            star.style.height = size + "px";

            star.style.animationDelay = Math.random() * 4 + "s";
            star.style.animationDuration = Math.random() * 3 + 2 + "s";

            starsContainer.appendChild(star);
        }
    }

    // Animasi tombol lanjut
    const nextButton = document.querySelector(".next-button");

    if (nextButton) {
        nextButton.addEventListener("click", function () {

            nextButton.style.opacity = "0.7";
            nextButton.style.transform = "scale(0.95)";

        });
    }

});
