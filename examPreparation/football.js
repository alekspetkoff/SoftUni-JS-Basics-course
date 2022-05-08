function football(input){

    let first = input[0];
    let second = input[1]; 
    let third = input[2];

    let won = 0;
    let lost = 0;
    let draw = 0;

    if (first[0] > first[2]){
        won++;
    } else if(first[0] < first[2]){
        lost++;
    } else {
        draw++;
    }

    if (second[0] > second[2]){
        won++;
    } else if(second[0] < second[2]){
        lost++;
    } else {
        draw++;
    }

    if (third[0] > third[2]){
        won++;
    } else if(third[0] < third[2]){
        lost++;
    } else {
        draw++;
    }

    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${draw}`);
}

football(["4:2",
"0:3",
"1:0"])