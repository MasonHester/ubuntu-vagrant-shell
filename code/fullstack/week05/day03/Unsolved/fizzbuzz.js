$(document).ready(function() {
    var numbersArray = [];

    for(i = 0; i < 100; i++) {
        numbersArray.push(i);
    }

    console.log(numbersArray);


    $("#start").on("click",fizzbuzz);

});