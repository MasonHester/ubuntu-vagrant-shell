var inquirer = require("inquirer");

function Players(nameX, positionX, offenseX, defenseX) {
    this.stats = {
        name: nameX,
        position: positionX,
        offense: offenseX,
        defense: defenseX,
    },
    
    this.goodGame = function() {

        console.log(this.name + " had a good game");

        if(Math.floor(Math.random()*2) === 0) {
            this.offense++;
            console.log(this.name + " has increased their offense");
        }

        else {
            this.defense++;
            console.log(this.name + " has inceased their defense");
        }
    }

    this.badGame = function() {

        console.log(this.name + " had a bad game");

        if(Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + " has decreased their offense");
        }

        else {
            this.defense--;
            console.log(this.name + " has deceased their defense");
        }
    }

    this.printStats = function() {
        console.log("====| " + this.stats.name + " |====");
        console.log("position: " + this.stats.position);
        console.log("offense: " + this.stats.offense);
        console.log("defense: " + this.stats.defense);
    }
}

let rosterArr = [];

let playerCount = 1;

function startMatch() {
    console.log(rosterArr[1].stats.name);
    inquirer.prompt([
        {
            type: "rawlist",
            name: "starters",
            message: "Choose your starters",
            choices: rosterArr
        }
    ])    
}

function getPlayers() {
    if(playerCount < 4) {
        inquirer.prompt([
            {
            name: "name",
            message: "What is player " + playerCount + "'s name?"
            }, {
            name: "position",
            message: "What is player " + playerCount + "'s position?"
            }, {
            name: "offense",
            message: "What is player " + playerCount + "'s offense? (number 1 - 10)"
            }, {
            name: "defense",
            message: "What is player " + playerCount + "'s defense? (number 1 - 10)"
            }
        ]).then(function(answers) {
            if(answers.offense < 1 || answers.defense < 1 || answers.offense > 10 || answers.defense > 10 || isNaN(answers.offense) || isNaN(answers.defense)) {
                console.log("You enetered an offense or defense that wasn't a number 1 - 10");
                getPlayers();
            }
    
            else {
                let player = new Players(answers.name, answers.position, answers.offense, answers.defense);
                rosterArr.push(player);
                playerCount++;
                getPlayers();
            }
        });
    }

    else {
        console.log("You have your three players!");
        for(i = 0; i < rosterArr.length; i++) {
            rosterArr[i].printStats()
        }
        startMatch();
    }
}

function startGame() {
    getPlayers();   
}

startGame();
