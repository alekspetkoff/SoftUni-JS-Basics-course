function souvenirs(input){

    let country = input[0];
    let souvenir = input[1];
    let numSouvenir = Number(input[2]);
    let sum = 0;
    
    if(country === "Argentina"){
        switch(souvenir){
            case "flags": sum = numSouvenir * 3.25; break;
            case "caps": sum = numSouvenir * 7.20; break;
            case "posters": sum = numSouvenir * 5.10; break; 
            case "stickers": sum = numSouvenir * 1.25; break;
            default: console.log("Invalid stock!"); break;
        }
    } else if(country === "Brazil"){
        switch(souvenir){
            case "flags": sum = numSouvenir * 4.20; break;
            case "caps": sum = numSouvenir * 8.50; break;
            case "posters": sum = numSouvenir * 5.35; break; 
            case "stickers": sum = numSouvenir * 1.20; break;
            default: console.log("Invalid stock!"); break;
        }
    } else if(country === "Croatia"){
        switch(souvenir){
            case "flags": sum = numSouvenir * 2.75; break;
            case "caps": sum = numSouvenir * 6.90; break;
            case "posters": sum = numSouvenir * 4.95; break; 
            case "stickers": sum = numSouvenir * 1.10; break;
            default: console.log("Invalid stock!"); break;
        }
    } else if(country === "Denmark"){
        switch(souvenir){
            case "flags": sum = numSouvenir * 3.10; break;
            case "caps": sum = numSouvenir * 6.50; break;
            case "posters": sum = numSouvenir * 4.80; break; 
            case "stickers": sum = numSouvenir * 0.90; break;
            default: console.log("Invalid stock!"); break;
        }
    } else {
        console.log("Invalid country!");
    }
    if(sum > 0){
        console.log(`Pepi bought ${numSouvenir} ${souvenir} of ${country} for ${sum.toFixed(2)} lv.`)
    }

}

souvenirs(["Denmark",
"caps",
"8"])