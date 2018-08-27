function Char(name, profession, gender, age, strength, hitPoints) {
    this.stats = [
        this.name = name,
        this.profession = profession,
        this.gender = gender,
        this.age = age,
        this.strength = strength,
        this.hitPoints = hitPoints,
    ],

    this.isAlive = function() {
        if(this.stats.hitPoints > 0) {
            console.log("this char is alive");
        }
        else {
            console.log("they dead");
        }
    },

    this.printStats = function() {
        console.log("---" + this.name + "---")
        for(i = 0; i < this.stats.length; i++) {
            console.log("......" + this.stats[i]);
        }
    }
}

let party = {};


party.first = new Char ("1Name", "1Job", "1Gender", 10, 25, 100);
party.second = new Char ("2Name", "2Job", "2Gender", 15, 28, 90);

console.log("========================");
first.printStats();
console.log("========================");
console.log("");
console.log("========================");
second.printStats();
console.log("========================");
console.log("");

let exJSON = {};
console.log(exJSON);
exJSON["exKey"] = "exValue";
console.log(exJSON);

if(process.argv[2] && process.argv[3] === "stats") {
    console.log(process.argv[2].printStats());    
}