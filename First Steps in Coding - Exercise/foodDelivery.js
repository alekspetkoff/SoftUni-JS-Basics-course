function foodDelivery(input){
    let chicken = 10.35 * Number(input[0]);
    let fish = 12.40 * Number(input[1]); 
    let veg = 8.15 * Number(input[2]);
    console.log((chicken + fish + veg) + (chicken + fish + veg) * 0.20 + 2.50);
}

foodDelivery(["9", "2", "6"]);
