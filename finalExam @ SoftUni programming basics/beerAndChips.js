function beerAndChips(input) {

    let name = input[0];
    let budget = Number(input[1]);
    let beerCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    let beerPrice = beerCount * 1.20;
    let chipsPrice = Math.ceil(chipsCount * (beerPrice * 0.45));

    let totalPrice = beerPrice + chipsPrice;

    if (budget >= totalPrice) {
        console.log(`${name} bought a snack and has ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${(totalPrice - budget).toFixed(2)} more leva!`);
    }
}
beerAndChips(["Valentin",
    "5",
    "2",
    "4"])