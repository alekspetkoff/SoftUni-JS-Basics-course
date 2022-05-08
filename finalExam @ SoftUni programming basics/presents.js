function presents(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let goodKids = "";

    for (let i = m; i >= n; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i == s) {
                break;
            } else {
                goodKids = goodKids + i + " ";
            }
        }
    }
    console.log(goodKids)
}

presents(["1",
    "36",
    "12"])