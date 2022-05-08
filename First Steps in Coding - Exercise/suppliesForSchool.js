function suppliesForSchool(input){
    let pens = Number(5.80*input[0]);
    let markers = Number(7.20*input[1]);
    let cleaner = Number(1.20*input[2]);
    let discount = Number(input[3]);
    let price = pens + markers + cleaner;
    let discountPrice = price - ((price*discount)/100);
    console.log(discountPrice);
}
suppliesForSchool(["2","3","4","25"]);
