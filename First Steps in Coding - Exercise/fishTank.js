function fishTank(input){
    let obem = (Number(input[0]) * Number(input[1]) * Number(input[2])) * 0.001;
    console.log(obem * (1 - (Number(input[3]))/100 ));
}

fishTank(["85", "75" , "47" , "17"])