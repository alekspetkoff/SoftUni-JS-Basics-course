function depositCalculator(input){
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let glp = Number(input[2]);
    let totalSum = deposit + period * ((deposit * glp/100)/12);
    console.log(totalSum);
}
depositCalculator(["2350","6","7"]);
