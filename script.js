function openLetter() {

    document
        .getElementById("home")
        .classList.remove("active");


    setTimeout(function() {

        document
            .getElementById("letter")
            .classList.add("active");


        createHearts(35);

    }, 500);
}



function showFinal() {

    document
        .getElementById("letter")
        .classList.remove("active");


    setTimeout(function() {

        document
            .getElementById("final")
            .classList.add("active");


        createHearts(60);

    }, 500);
}



/* HEART ANIMATION */

function createHearts(number) {

    for (
        let i = 0;
        i < number;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        const emojis = [

            "❤️",
            "💖",
            "💗",
            "💕",
            "✨"

        ];


        heart.innerHTML =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (15 + Math.random() * 30)
            + "px";


        heart.style.animationDuration =
            (4 + Math.random() * 5)
            + "s";


        heart.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(function() {

            heart.remove();

        }, 10000);

    }
}



/* SMALL HEARTS */

setInterval(function() {

    createHearts(2);

}, 2500);
