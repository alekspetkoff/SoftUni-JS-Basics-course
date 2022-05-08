function basketball(input){
    let shoes = Number(input[0]) - Number(input[0]) * 0.40;
    let jersey = shoes - shoes * 0.20;
    let ball = jersey * 0.25;
    let accessories = ball * 0.20;
    console.log(Number(input[0]) + shoes + jersey + ball + accessories);
}

basketball(["550"])