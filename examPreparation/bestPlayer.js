function bestPlayer(input) {
    let index = 0
    let player = input[index]
    index++;
    let score = Number(input[index]);
    index++;

    let bestScore = 0;
    let bestPlayer = "";

    while(player != "End"){
        if (bestScore < score){
            bestScore = score;
            bestPlayer = player;
        }
        player = input[index];
        index++;
        score = input[index];
        index++;
    }
    if(bestScore >= 3){
        console.log(`${bestPlayer} is the best player!`);
        console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestScore} goals.`);
    }



}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "End"]);