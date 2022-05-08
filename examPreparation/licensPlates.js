function license(input){
    let a = Number(input[0]);
    let b = Number(input[1]);

    for (let i = a; i <= b; i++){
        for (let j = a; j <= b; j++){
            for (let x = a; x <= b; x++){
                for (let y = a; y <= b; y++){
                    if (i % 2 == 0 & y % 2 != 0 || i % 2 != 0 & y % 2 == 0){
                        if(i > y){
                            if((j + x) % 2 == 0){
                                console.log("" + i + j + x + y);
                            }
                        }
                    }
                }
            }
        }
    }
}
license(["5","8"])