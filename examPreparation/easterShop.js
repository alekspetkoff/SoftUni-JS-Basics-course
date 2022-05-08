function easterShop(input){

    let index = 0;
    let totalEggsCount = Number(input[index]);
    index++;
    let eggsBought = 0;

    while(input[index] != "Close"){
        if (input[index] === "Buy"){
            index++;
            if(totalEggsCount >= Number(input[index])) {
            totalEggsCount -= Number(input[index]);
            eggsBought += Number(input[index]);
            } else {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${totalEggsCount}.`); break;
            }
        }
        if (input[index] === "Fill"){
            index++;
            totalEggsCount += Number(input[index]);
        }
        index++;
    }
    if (input[index] === "Close"){
        console.log("Store is closed!");
        console.log(`${eggsBought} eggs sold.`);
    }

}

easterShop(["13",
"Buy",
"8",
"Fill",
"3",
"Buy",
"10"])