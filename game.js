const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const body = document.querySelector("body");
const rastgele = Math.ceil(Math.random() * 20);
const msg = document.querySelector(".msg");
const scoreText = document.querySelector(".score");
const topScoreText = document.querySelector(".top-score");
const numberText = document.querySelector(".number");
const again = document.querySelector(".again");


let score = 10;
let TopScore = 0;
console.log(rastgele);



check.onclick = () => {


    while (score > 0) {


        if (rastgele == guess.value) {
            score--;
            TopScore++;
            scoreText.innerHTML = score;
            topScoreText.innerHTML = TopScore;
            numberText.innerHTML = rastgele;
            body.style.backgroundColor = "green";
            console.log(msg.textContent = "Tebrikler");
            break;
        }

        else if (rastgele < guess.value) {
            score--;
            TopScore++;
            scoreText.innerHTML = score;
            topScoreText.innerHTML = score;
            body.style.backgroundColor = "red";
            msg.textContent = "Azaltin";

            break
        }

        else if (rastgele > guess.value) {
            score--;
            TopScore++;
            scoreText.innerHTML = score;
            topScoreText.innerHTML = score;
            body.style.backgroundColor = "red";
            msg.textContent = "Artirin";
            break
        }

    }
    if (score == 0) {
        body.style.backgroundColor = "red";
        msg.textContent = "Sie haben verloren";
        scoreText.innerHTML = score;
        topScoreText.innerHTML = score;
    }

}

const reloadButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener(click, reload, false);