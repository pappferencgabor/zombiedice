const red = {
    sides: ["explosion", "explosion", "explosion", "flee", "flee", "brain"],
    color: "red"
}
const yellow = {
    sides: ["explosion", "explosion", "flee", "flee", "brain", "brain"],
    color: "yellow"
}

const green = {
    sides: ["explosion", "flee", "flee", "brain", "brain", "brain"],
    color: "green"
}

let cup = [red, red, red, yellow, yellow, yellow, yellow, green, green, green, green, green, green]

function mixCup(cup) {
    cup.sort(() => {return Math.floor(Math.random() * 2 - 1)})
    return cup
}

const rollADice = (dice) => {
    return dice.sides[Math.floor(Math.random() * 6)]
}

const round = (brainstore = [], explostore = []) => {
    cup = mixCup(cup)

    let hand = []
    hand.push(cup.pop())
    hand.push(cup.pop())
    hand.push(cup.pop())

    explostore = [];
    brainstore = [];

    hand.forEach(dice => {
        let res = rollADice(dice)
        if (res === "brain") { brainstore.push(dice) }
        else if (res === "explosion") { explostore.push(dice) }
        else { cup.push(dice) }
    });

    if (explostore.length >= 3 ) {
        console.log("vége")
        cup = [...cup, brainstore]
        cup = [...cup, explostore]
    }

    /*if (confirm("Folytatod a kört?")) {
        round(brainstore, explostore)
    }
    else {
        console.log(`${brainstore.length}`)
        cup = [...cup, brainstore]
        cup = [...cup, explostore]
        round();
    }*/
}


round();