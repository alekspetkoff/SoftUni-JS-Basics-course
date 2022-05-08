function suitcases(input) {

    let totalSpace = Number(input[0]);
    let index = 1;
    let suitcaseCount = 0;

    while (true) {
        if (input[index] === "End") {
            console.log("Congratulations! All suitcases are loaded!"); break;
        }
        if (input[index] > totalSpace) {
            console.log("No more space!"); break;
        }
        if (suitcaseCount % 3 == 0 && suitcaseCount != 0) {
            totalSpace = totalSpace - (input[index] * 10) / 100;
            if (input[index + 1] > totalSpace) {
                console.log("No more space!"); break;
            }
            suitcaseCount++;
            index++;
            continue;
        }
        totalSpace = totalSpace - input[index];
        suitcaseCount++;
        index++;

    }
    console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);

}
suitcases(["550",
"100",
"252",
"72",
"End"])