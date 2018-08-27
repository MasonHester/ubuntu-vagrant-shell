function DigitalPet() {
    this.hungry = false,
    this.sleepy = false,
    this.bored = true,
    this.age = 0,
    this.play = function(b) {
        if(b) {
            this.bored = false;
            this.hungry = true;
            console.log("Yay! Let's play!");
        }
        else {
            console.log("I'm not bored");
        }
    },

    this.feed = function(h) {
        if(h) {
            this.hungry = false;
            this.sleepy = true;
            console.log("Yum! That was good.");
        }

        else {
            console.log("No thanks, Im full.")
        }
    },

    this.increaseAge = function() {
        this.age++;
    },

    this.sleep = function(s) {
        if(s) {
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
            console.log(this.age);
            console.log("ZZZzzzZZZ");
        }
        
        else {
            console.log("No way! I'm not tired.");
        }
    }
}

let petName = new DigitalPet();

petName.play(petName.bored);
petName.feed(petName.hungry);
petName.play(petName.bored);
petName.sleep(petName.sleepy);

petName.play(petName.bored);
petName.feed(petName.hungry);
petName.sleep(petName.sleepy);

//==================================================

let dog = new DigitalPet();

dog["outside"] = false;
dog["bark"] = function() {
    console.log("Bark! bark! bark!");
}
dog["goOutside"] = function(o) {
    if(o) {
        console.log("I'm already outside")
    }
    else {
        dog.outside = true;
        dog.bark();
        console.log("I'm now outside")
    }
}
dog["goInside"] = function(o) {
    if(o) {
        dog.outside = false;
        console.log("If we have to");
    }
    else {
        console.log("I'm already inside")
    }
}

dog.goOutside(dog.outside);
dog.goOutside(dog.outside);
dog.goInside(dog.Outside);

//==================================================

let cat = new DigitalPet();

cat["houseCondition"] = 100;
cat["meow"] = function() {
    console.log("Meow! meow!");
}
cat["destroyFurniture"] = function(c) {
    if(c < 0 || c === 0) {
        console.log("There is no furniture left to destroy!");
    }
    else {
        cat.houseCondition = c - 10;
        // cat.houseCondition = tempVar;
        cat.bored = false;
        cat.sleepy = true;
        console.log(c);
    }
}

cat["buyFurniture"] = function(c) {
    cat.houseCondition = c + 50;
    console.log(c);
}

cat.destroyFurniture(cat.houseCondition);
cat.destroyFurniture(cat.houseCondition);
cat.destroyFurniture(cat.houseCondition);
cat.buyFurniture(cat.houseCondition);
cat.buyFurniture(cat.houseCondition);
cat.buyFurniture(cat.houseCondition);
cat.buyFurniture(cat.houseCondition);
