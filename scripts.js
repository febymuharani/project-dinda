document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENT
    ========================= */

    const opening =
        document.getElementById("opening");

    const mainContent =
        document.getElementById("mainContent");

    const openButton =
        document.getElementById("openButton");

    const surpriseButton =
        document.getElementById("surpriseButton");

    const surpriseMessage =
        document.getElementById("surpriseMessage");

    const restartButton =
        document.getElementById("restartButton");

    const confettiContainer =
        document.getElementById("confettiContainer");

    const backgroundMusic =
        document.getElementById("backgroundMusic");

    const musicButton =
        document.getElementById("musicButton");

    const openingTitle =
        document.getElementById("openingTitle");


    /* =========================
       RANDOM MESSAGE ELEMENT
    ========================= */

    const randomMessageButton =
        document.getElementById("randomMessageButton");

    const randomMessageBox =
        document.getElementById("randomMessageBox");

    const randomMessageText =
        document.getElementById("randomMessageText");


    /* =========================
       MEMORY ELEMENT
    ========================= */

    const memoryCards =
        document.querySelectorAll(".memory-card");

    const memoryModal =
        document.getElementById("memoryModal");

    const closeMemory =
        document.getElementById("closeMemory");

    const modalImage =
        document.getElementById("modalImage");

    const modalNumber =
        document.getElementById("modalNumber");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalText =
        document.getElementById("modalText");


    /* =========================
       MUSIC STATUS
    ========================= */

    let musicPlaying = false;


    /* =========================
       OPENING ANIMATION
    ========================= */

    if (openingTitle) {

        openingTitle.style.opacity = "0";

        setTimeout(function () {

            openingTitle.style.opacity = "1";

        }, 500);

    }


    /* =========================
       CONFETTI
    ========================= */

    function createConfetti() {

        const pieces = 80;

        for (let i = 0; i < pieces; i++) {

            const confetti =
                document.createElement("div");

            confetti.classList.add("confetti");

            confetti.style.left =
                Math.random() * 100 + "%";

            confetti.style.animationDuration =
                (Math.random() * 2 + 2) + "s";

            confetti.style.animationDelay =
                Math.random() * 0.5 + "s";

            const size =
                Math.random() * 6 + 7;

            confetti.style.width =
                size + "px";

            confetti.style.height =
                size + "px";

            const colors = [
                "#f5ca35",
                "#e9b949",
                "#ffd966",
                "#d9a514",
                "#fff1a8"
            ];

            confetti.style.backgroundColor =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];

            confetti.style.borderRadius =
                Math.random() > 0.5
                    ? "50%"
                    : "2px";

            confettiContainer.appendChild(
                confetti
            );

            setTimeout(function () {

                confetti.remove();

            }, 4500);

        }

    }


    /* =========================
       PLAY MUSIC
    ========================= */

    function playMusic() {

        if (!backgroundMusic) {
            return;
        }

        backgroundMusic.volume = 0.35;

        backgroundMusic.play()
            .then(function () {

                musicPlaying = true;

                if (musicButton) {

                    musicButton.textContent =
                        "🎵 Musik ON";

                }

            })
            .catch(function (error) {

                console.log(
                    "Musik belum dapat diputar:",
                    error
                );

            });

    }


    /* =========================
       STOP MUSIC
    ========================= */

    function stopMusic() {

        if (!backgroundMusic) {
            return;
        }

        backgroundMusic.pause();

        musicPlaying = false;

        if (musicButton) {

            musicButton.textContent =
                "🔇 Musik OFF";

        }

    }


    /* =========================
       BUKA WEBSITE
    ========================= */

    if (openButton) {

        openButton.addEventListener(
            "click",
            function () {

                createConfetti();

                playMusic();

                opening.style.display =
                    "none";

                mainContent.style.display =
                    "block";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================
       MUSIC BUTTON
    ========================= */

    if (musicButton) {

        musicButton.addEventListener(
            "click",
            function () {

                if (musicPlaying) {

                    stopMusic();

                } else {

                    playMusic();

                }

            }
        );

    }


    /* =========================
       SURPRISE MESSAGE
    ========================= */

    if (surpriseButton) {

        surpriseButton.addEventListener(
            "click",
            function () {

                surpriseMessage.style.display =
                    "block";

                surpriseButton.style.display =
                    "none";

                surpriseMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    /* =========================
       RANDOM MESSAGES
    ========================= */

    const randomMessages = [

        "Dinda, kamu resmi naik level: dari pejuang skripsi menjadi calon wisudawan. 🎓✨",

        "Selamat! Kamu berhasil mengalahkan final boss bernama REVISI. 😂🏆",

        "Semoga setelah skripsi ini, yang datang bukan revisi lagi, tapi rezeki. 💰✨",

        "Hari ini boleh banget bangga sama diri sendiri. Kamu berhasil sampai sejauh ini. 💛",

        "Dilarang bilang 'akhirnya selesai' terlalu keras. Nanti dosen pembimbing dengar. 😂",

        "Satu perjuangan selesai. Sekarang waktunya menikmati hasil dari semua kerja kerasmu. 🌸",

        "Kamu sudah melewati hari-hari yang nggak mudah. Dan lihat sekarang... kamu berhasil. 🥹💛",

        "Semoga langkah berikutnya membawa kamu ke tempat-tempat yang bahkan belum pernah kamu bayangkan. ✨",

        "Skripsi boleh selesai, tapi cerita sukses Dinda baru saja dimulai. 🎓🌷",

        "Kalau hari ini terasa spesial, memang seharusnya begitu. Karena kamu punya alasan untuk merayakannya. 🎉",

        "Reminder kecil: jangan lupa kasih apresiasi ke diri sendiri. Kamu sudah bekerja keras. 💛",

        "Achievement unlocked: SKRIPSI SELESAI ✓ Sekarang tinggal menunggu hari wisuda! 🎓😂"

    ];


    if (randomMessageButton) {

        randomMessageButton.addEventListener(
            "click",
            function () {

                const randomIndex =
                    Math.floor(
                        Math.random() *
                        randomMessages.length
                    );

                randomMessageText.textContent =
                    randomMessages[randomIndex];

                randomMessageBox.classList.add(
                    "show"
                );

                randomMessageBox.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    /* =========================
       MEMORY DATA
    ========================= */

    const memories = {

        1: {
            image: "memory1.jpg",
            number: "MEMORY 01",
            title: "Awal perjalanan",
            text: "Semua perjalanan besar selalu dimulai dari satu langkah kecil. Dari sinilah cerita perjuangan Dinda dimulai."
        },

        2: {
            image: "memory2.jpg",
            number: "MEMORY 02",
            title: "Di tengah proses",
            text: "Ada banyak hal yang harus dilewati. Lelah, revisi, bingung, dan berbagai cerita yang akhirnya menjadi bagian dari perjalanan."
        },

        3: {
            image: "memory3.jpg",
            number: "MEMORY 03",
            title: "Sampai di titik ini",
            text: "Setelah semua proses yang dilewati, akhirnya sampai juga di titik yang dulu mungkin terasa masih jauh."
        }

    };


    /* =========================
       OPEN MEMORY
    ========================= */

    memoryCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const memoryNumber =
                    card.getAttribute("data-memory");

                const memory =
                    memories[memoryNumber];

                if (!memory) {
                    return;
                }

                modalImage.src =
                    memory.image;

                modalNumber.textContent =
                    memory.number;

                modalTitle.textContent =
                    memory.title;

                modalText.textContent =
                    memory.text;

                memoryModal.classList.add(
                    "show"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    /* =========================
       CLOSE MEMORY
    ========================= */

    function closeMemoryModal() {

        memoryModal.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

    }


    if (closeMemory) {

        closeMemory.addEventListener(
            "click",
            closeMemoryModal
        );

    }


    if (memoryModal) {

        memoryModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    memoryModal
                ) {

                    closeMemoryModal();

                }

            }
        );

    }


    /* =========================
       ESCAPE CLOSE MODAL
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                memoryModal.classList.contains("show")
            ) {

                closeMemoryModal();

            }

        }
    );


    /* =========================
       RESTART
    ========================= */

    if (restartButton) {

        restartButton.addEventListener(
            "click",
            function () {

                surpriseMessage.style.display =
                    "none";

                surpriseButton.style.display =
                    "inline-block";

                randomMessageBox.classList.remove(
                    "show"
                );

                randomMessageText.textContent =
                    "Pesan rahasia untuk Dinda akan muncul di sini...";

                closeMemoryModal();

                mainContent.style.display =
                    "none";

                opening.style.display =
                    "flex";

                stopMusic();

                confettiContainer.innerHTML =
                    "";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                if (openingTitle) {

                    openingTitle.style.opacity =
                        "0";

                    setTimeout(function () {

                        openingTitle.style.opacity =
                            "1";

                    }, 300);

                }

            }
        );

    }

});