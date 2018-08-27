const dog = {
    raining: true,
    noise: "woof",
    makeNoise: function() {
        if(dog.raining) {
            console.log(dog.noise);
        }
    }
}

const cat = {
    raining: false,
    noise: "meow",
    makeNoise: function() {
        if(cat.raining) {
            console.log(cat.noise);
        }
    }
}

if(process.argv[2] === "mass") {
    cat.raining = true;
}

function mass(d, c) {
    if(d.raining && c.raining) {
        console.log("mass hysteria");
    }
}

dog.makeNoise();
cat.makeNoise();
mass(dog, cat);


//===========================================================

function Animals(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if(this.raining) {
            console.log(this.noise);
        }
    }
}

let dog = new Animals(true, "woof");
let cat = new Animals(false, "meow");