function repainting(input){
    let nylon = (Number(input[0]) +2) * 1.50;
    let paint = (Number(input[1]) + Number(input[1])*0.10) * 14.50;
    let razreditel = Number(input[2]) * 5.00;
    let bags = 0.40;
    let totalSumMaterials = nylon + paint + razreditel + bags;
    let workforce = (totalSumMaterials * 0.30) * Number(input[3]);
    console.log(totalSumMaterials + workforce);
}
repainting(["5","10","10","1"]);