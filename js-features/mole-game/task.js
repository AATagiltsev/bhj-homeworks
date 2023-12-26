let hit = 0;
let miss = 0;
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
    let id = "hole" + index;
    return document.getElementById(id);
};

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            hit += 1;
            if (hit >= 10) {
                endOfGame(true);
            }
        } else {
            miss += 1;
            if (miss >= 5) {
                endOfGame(false);
            }
        }
        dead.textContent = hit;
        lost.textContent = miss;
    };
};

function endOfGame(isVictory) {
    hit = 0;
    miss = 0;
    let sMsg = isVictory ? "Вы выиграли" : "Вы проиграли"
    alert(sMsg);
};