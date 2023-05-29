let rolls;

const initialize = () => {
    for (let dice of document.getElementsByClassName("dice")) {
        dice.addEventListener("click", e => diceClicked(dice));
    }

    reset();
}



const reset = () => {
    rolls = new Map([
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0],
        [10, 0],
        [11, 0],
        [12, 0],
    ]);

    document.getElementById("graph").style.display = "none";
    document.getElementById("update").style.display = "flex";
    document.getElementById("goto").style.visibility = "visible";
}

const diceClicked = (dice) => {
    let key = Number(dice.textContent);
    rolls.set(key, rolls.get(key) + 1);
    console.log(rolls.get(key));
}

const createChart = () => {
    document.getElementById("update").style.display = "none";
    document.getElementById("graph").style.display = "flex";
    document.getElementById("goto").style.visibility = "hidden";

    let arr = new Array();
    for (const num of rolls.values()) {
        arr.append(num);
    }
    let canvas = document.getElementById("dicestats");
    let config = {
        type: "bar",
        data: {
            label: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            datasets: [{label: "Freqency of Dice Rolls", data: arr}]
        }
    };

    let diceChart = new Chart(canvas, config);
}

