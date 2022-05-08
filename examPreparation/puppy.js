function puppy(input) {

    let totalFood = Number(input[0]) * 1000;
    let index = 1;
    let foodEaten = 0;

    while(input[index] != "Adopted"){
      foodEaten += Number(input[index]);
      index++;
    }
    if(foodEaten < totalFood){
        console.log(`Food is enough! Leftovers: ${totalFood - foodEaten} grams.`)
    } else {
        console.log(`Food is not enough! You need ${foodEaten - totalFood} grams more.`)
    }


}

puppy(["2","999","456","999","999","123","456","Adopted"]);