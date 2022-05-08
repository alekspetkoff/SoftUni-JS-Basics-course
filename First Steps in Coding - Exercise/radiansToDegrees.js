function radiansToDegrees(input){
    let rad = Number(input[0]);
    let gradus = rad * 180 / Math.PI;
    console.log(gradus);
}
radiansToDegrees(["6.2832"]);