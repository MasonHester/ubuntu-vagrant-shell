$(document).ready(function() {

    var isPrime = true;

    var value = 20

    for(i = 1; i < value; i++) {
        if(value % i == 0) {
            isPrime = false;
        }

        else {
            isPrime = true;
        }
    }

    if(isPrime = false) {
        console.log(value + " is not prime");
    }

    else {
        console.log(value + " is prime");
    }

});