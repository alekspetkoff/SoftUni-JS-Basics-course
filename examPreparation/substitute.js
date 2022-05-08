function substitute(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    for (let i = k; i <= 8; i++) {
        for (let j = 9; j >= l; j--){
            for (let x = m; x <= 8; x++){
                for (let y = 9; y >= n; y--){
                    if(i % 2 == 0 && x % 2 == 0 && j % 2 != 0 && y % 2 != 0){
                        if(i == x && j == y){
                            console.log(`Cannot change the same player.`);
                        } else {
                            console.log(`${i}${j} - ${x}${y}`);
                        }
                    }
                }
            }
        }
    }
}

substitute(["7","6","8","5"]);