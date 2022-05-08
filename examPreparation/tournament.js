function tournament(input) {

    let days = Number(input[0]);
    let index = 1;
    let totalMoney = 0;
    let totalWin = 0;
    let totalLose = 0;

    for (let i = 1; i <= days; i++) {
        let winCount = 0;
        let loseCount = 0;
        let money = 0;
        while (input[index] != "Finish") {
            index++;
            if (input[index] === "win") {
                money += 20;
                winCount++;
                index++;
            } else {
                loseCount++;
                index++;
            }
        }
        if (winCount > loseCount) {
            money = money * 1.1;
            totalMoney += money;
            totalWin++;
            index++;
        } else {
            totalMoney += money;
            totalLose++;
            index++;
        }
    }
    if (totalWin > totalLose) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${(totalMoney).toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }





}
tournament(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker", "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])