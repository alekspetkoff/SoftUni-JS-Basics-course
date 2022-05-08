function christmasGifts(input){

    let kids = 0;
    let adults = 0;
    let toyGift = 5;
    let adultGift = 15;
    
    index = 0;
    while(input[index] != "Christmas") {
        if(Number(input[index]) <= 16) {
            kids++;
            index++;
            continue;
        } else if (Number(input[index]) > 16) {
            adults++;
            index++;
            continue;
        }
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toyGift * kids}`);
    console.log(`Money for sweaters: ${adultGift * adults}`);

}
christmasGifts(["16",
"16",
"16",
"16",
"16",
"Christmas"])