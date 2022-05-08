function GameShop(input){
    let numGames = Number(input[0]);
    index = 1;
    let count = 0;
    let hearthStone = 0;
    let fortnite = 0;
    let overwatch = 0;
    let others = 0;
    while(count < numGames){
       if(input[index] === "Hearthstone"){
        hearthStone++;
       } else
       if(input[index] === "Fornite"){
        fortnite++;
       } else 
       if(input[index] === "Overwatch"){
        overwatch++;
       } else { others++;}
      /* if(input[index] != "Hearthstone" && input[index] != "Fortnite" && input[index] != "Overwatch") {
        others++;
       } */
       index++;
       count++;
    }
    console.log(`Hearthstone - ${(hearthStone*100/numGames).toFixed(2)}%`);
    console.log(`Fornite - ${(fortnite*100/numGames).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch*100/numGames).toFixed(2)}%`);
    console.log(`Others - ${(others*100/numGames).toFixed(2)}%`);

}
GameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])
