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
}

const diceClicked = (dice) => {
    let key = Number(dice.textContent);
    rolls.set(key, rolls.get(key) + 1);
    console.log(rolls.get(key));
}