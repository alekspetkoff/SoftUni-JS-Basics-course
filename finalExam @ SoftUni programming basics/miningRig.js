function miningRig(input){
let videoCards = 13; 
let prehodnik = 13;

let priceVideoCards = videoCards * Number(input[0]);
let pricePrehodnik = prehodnik * Number(input[1]);

let priceElectricityPerDay = Number(input[2]);
let profitPerDay = Number(input[3]);

let totalSpendMoney = priceVideoCards + pricePrehodnik + 1000;
let profitPerDayPerVideo = profitPerDay - priceElectricityPerDay;
let totalProfit = (profitPerDayPerVideo * videoCards).toFixed(2);

console.log(totalSpendMoney);
console.log(Math.ceil(totalSpendMoney / totalProfit));
}

miningRig(["800",
"10",
"0.32",
"6.4"])