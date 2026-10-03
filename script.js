
document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.querySelector("#continueBtn");

    // Efek kelopak bunga
    function createPetal() {
        const petal = document.createElement("div");

        petal.classList.add("petal");
        petal.innerHTML = "✿";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 5 + 5 + "s";
        petal.style.opacity = Math.random() * 0.5 + 0.2;
        petal.style.fontSize = Math.random() * 12 + 10 + "px";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);
    }

    setInterval(createPetal, 700);

    // Tombol membuka cerita
    if (startButton) {
        startButton.addEventListener("click", function () {

            startButton.disabled = true;
            startButton.style.opacity = "0.7";
            startButton.style.transform = "scale(0.95)";
            startButton.innerHTML = "Membuka cerita... ♡";

            // Mengirim perintah ke player utama
            window.parent.postMessage(
                { action: "startStory" },
                "*"
            );

        });
    }

});
