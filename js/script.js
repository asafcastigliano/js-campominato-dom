function createGame() {
    const gameElement = document.getElementById("game");
    gameElement.innerHTML = "";

    createCell(gameElement);

    return placeBombs(gameElement);
}

function createCell(gameElement) {
    let number = 1;

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("div");
        row.id = "row-" + (i + 1);
        row.classList.add("d-flex", "w-1000");

        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.classList.add("square");
            cell.dataset.value = number;
            row.appendChild(cell);
            number++;
        }

        gameElement.appendChild(row);
    }

    let points = 0;

    const cells = document.querySelectorAll(".square");
    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            const value = this.dataset.value;
            if (bombs.includes(parseInt(value))) {
                this.classList.add("bomb");
                gameEnd(points);
            } else {
                this.classList.add("clicked");
                points++;
            }
        });
    });
}

function placeBombs(gameElement) {
    let genBombs = [];
    let bombsCount = 16;

    while (bombsCount > 0) {
        const num = Math.floor(Math.random() * 100) + 1;
        const cell = gameElement.querySelector(`[data-value="${num}"]`);
        if (!genBombs.includes(num) && cell) {
            genBombs.push(num);
            cell.dataset.hasBomb = true;
            bombsCount--;
        }
    }

    return genBombs;
}

function gameEnd(points){
    const gameElement = document.getElementById("game");
    gameElement.innerHTML = "Hai totalizzato " + points + " punti";
}

let bombs = [];

const game = document.querySelector(".gioca");
game.addEventListener("click", function () {
    bombs = createGame();
});
