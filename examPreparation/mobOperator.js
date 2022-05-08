function mobOperator(input) {

    let yearsContract = input[0];
    let typeContract = input[1];
    let mobInternet = input[2];
    let months = Number(input[3]);

    let pricePerMonth = 0;

    if (yearsContract == "one") {
        switch (typeContract) {
            case "Small": pricePerMonth = 9.98; break;
            case "Middle": pricePerMonth = 18.99; break;
            case "Large": pricePerMonth = 25.98; break;
            case "ExtraLarge": pricePerMonth = 35.99; break;
        }
        if (mobInternet == "yes") {
            if (pricePerMonth <= 10) {
                pricePerMonth += 5.50;
            } else if (pricePerMonth > 10 && pricePerMonth <= 30) {
                pricePerMonth += 4.35;
            } else {
                pricePerMonth += 3.85;
            }
        }
        console.log(`${(pricePerMonth * months).toFixed(2)} lv.`);
    }

    if (yearsContract == "two") {
        switch (typeContract) {
            case "Small": pricePerMonth = 8.58; break;
            case "Middle": pricePerMonth = 17.09; break;
            case "Large": pricePerMonth = 23.59; break;
            case "ExtraLarge": pricePerMonth = 31.79; break;
        }
        if (mobInternet == "yes") {
            if (pricePerMonth <= 10) {
                pricePerMonth += 5.50;
            } else if (pricePerMonth > 10 && pricePerMonth <= 30) {
                pricePerMonth += 4.35;
            } else {
                pricePerMonth += 3.85;
            }
        }
        pricePerMonth = pricePerMonth - (pricePerMonth * 0.0375);
        console.log(`${(pricePerMonth * months).toFixed(2)} lv.`);
    }
}

mobOperator(["two",
"ExtraLarge",
"yes",
"20"])