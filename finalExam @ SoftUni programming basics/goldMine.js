function goldMine(input){

    let locNumber = Number(input[0]);
    let index = 0;
    index++;

    for (i = 1 ; i <= locNumber; i++){
       let avgGoldDay = Number(input[index]);
       index++;
       let daysWork = Number(input[index]);
       index++;
       let totalGold = 0;
       for (let a = 1; a <= daysWork; a++){
           let currentDayGold = Number(input[index]);
           index++
           totalGold += currentDayGold;
       }
       if (totalGold / daysWork >= avgGoldDay){
           console.log(`Good job! Average gold per day: ${(totalGold / daysWork).toFixed(2)}.`);
           totalGold = 0;
       } else {
          console.log(`You need ${(avgGoldDay - (totalGold / daysWork)).toFixed(2)} gold.`);
       }
    }

}

goldMine(["1","5","3","10","1","3"]);