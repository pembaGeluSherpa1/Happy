const sadImg = ["togepiSad1.gif", "togepiSad2.gif", "togepiCrying.gif"];
const happyImg = ["togepiAndPikachu.gif", "togepiHappy.gif", "love.gif"];

const noTexts = [
    "You almost clicked 'No' 😳",
    "Are you sure? 😢",
    "Please say yes, you pookie 🥺",
    "Think again, my love 😭",
    "I'm begging you! 😭",
    "Don't do this to me! 💔"
];

let noClickCount = 0;
let yesScale = 1;

function ClickButton() {
    let yesBtn = document.getElementById("yes-btn");
    let noBtn = document.getElementById("no-btn");
    let yesImg = document.getElementById("yes-img");
    let noImg = document.getElementById("no-img");

    function moveNoButton() {
        let x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        let y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    noBtn.addEventListener("mouseover", () => {
        moveNoButton(); // Move button randomly

        // Change "No" button text randomly
        noBtn.textContent = noTexts[Math.floor(Math.random() * noTexts.length)];

        // Show a random sad image
        let randomSadImg = sadImg[Math.floor(Math.random() * sadImg.length)];
        noImg.src = randomSadImg;
        noImg.style.display = "block"; 

        // Hide the happy image
        yesImg.style.display = "none";

        // Increase "Yes" button size
        yesScale += 0.2;
        yesBtn.style.transform = `scale(${yesScale})`;
    });

    noBtn.addEventListener("click", () => {
        moveNoButton(); // Move button again on click
        if (noClickCount < sadImg.length) {
            noImg.src = sadImg[noClickCount];
            noClickCount++;
        } else {
            noBtn.textContent = "Please reconsider 😭";
        }
    });

    yesBtn.addEventListener("click", () => {
        yesImg.src = happyImg[0];
        yesImg.style.display = "block"; 
        noImg.style.display = "none"; 
        document.querySelector(".valentineBox span").textContent = "Yay! ❤️🥰";
        document.querySelector(".button").style.display = "none"; 
    });

    noBtn.addEventListener("mouseleave", () => {
        yesImg.style.display = "block"; 
        noImg.style.display = "none"; 
    });
}

ClickButton();