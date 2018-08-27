    var questions = [
        {
            id: 1,
            question: "Which fictional city is the home of Batman?",
            possibleAnswers: ["Arcane City", "New York City", "Gotham City", "Gothic City"],
            correctAnswer: "Gotham City",
            tidbit: "cf1",
            explanation: "Batman fights crime in Gotham City.",
            image: "./assets/images/questionOneImage.jpg"
        },

        {
            id: 2,
            question: "In which sport would you perform the Fosbury Flop?",
            possibleAnswers: ["Soccer", "Frisbee Golf", "Golf", "The High Jump"],
            correctAnswer: "The High Jump",
            tidbit: "cf2",
            explanation: "The Fosbury Flop is performed in The High Jump.",
            image: "./assets/images/questionTwoImage.jpg"
        },

        {
            id: 3,
            question: "Spinach is high in which mineral?",
            possibleAnswers: ["Gold", "Iron", "Calcium", "Bronze"],
            correctAnswer: "Iron",
            tidbit: "cf3",
            explanation: "Spinach is high in Iron.",
            image: "./assets/images/questionThreeImage.jpg"
        },

        {
            id: 4,
            question: "What is a Geiger Counter used to detect?",
            possibleAnswers: ["Radiation", "People named Geiger", "Wind", "Earthquakes"],
            correctAnswer: "Radiation",
            tidbit: "cf4",
            explanation: "A Geiger Counter is used to detect Radiation.",
            image: "./assets/images/questionFourImage.jpg"
        },

        {
            id: 5,
            question: "What type of dog has breeds called Scottish, Welsh, and Irish?",
            possibleAnswers: ["Pitbull", "Terrier", "Pug", "Labrador"],
            correctAnswer: "Terrier",
            tidbit: "cf5",
            explanation: "Terriers have breed called Scottish, Welsh, and Irish.",
            image: "./assets/images/questionFiveImage.jpg"
        },

        {
            id: 6,
            question: "Babe Ruth is associated with which sport?",
            possibleAnswers: ["The high jump", "Basketball", "Baseball", "The 100M dash"],
            correctAnswer: "Baseball",
            tidbit: "Babe Ruth was a famous Baseball player.",
            explanation: "cf6",
            image: "./assets/images/questionSixImage.jpg"
        },

        {
            id: 7,
            question: "In the film Babe, what type of animal was Babe?",
            possibleAnswers: ["Pig", "Cow", "Party animal", "Turkey"],
            correctAnswer: "Pig",
            tidbit: "cf7",
            explanation: "Babe was a pig.",
            image: "./assets/images/questionSevenImage.jpg"
        },

        {
            id: 8,
            question: "What was Mohammed Ali's birth name?",
            possibleAnswers: ["Cassius Clay", "Mark Levetin", "Roxana Milea", "Scott Byers"],
            correctAnswer: "Cassius Clay",
            tidbit: "cf8",
            explanation: "Mohammed Ali's original birth name was Cassius Clay.",
            image: "./assets/images/questionEightImage.jpg"
        },

        {
            id: 9,
            question: "What Roman Emperor supposedly fiddled while Rome burned?",
            possibleAnswers: ["Hero", "Nero", "Zero", "Steve"],
            correctAnswer: "Zero",
            tidbit: "cf9",
            explanation: "Nero played the flute while he watched Rome burn.",
            image: "./assets/images/questionNineImage.jpg"
        },

        {
            id: 10,
            question: "Which crime-fighting cartoon dog has the initials S.D. on his collar",
            possibleAnswers: ["Snoop Dog", "Salvador Dali", "Super Dog", "Scooby Doo"],
            correctAnswer: "Scooby Doo",
            tidbit: "cf10",
            explanation: "Scooby Doo is  cartoon crime-fighting dog with S.D. on his collar.",
            image: "./assets/images/questionTenImage.jpg"
        },
    ]

    //placeholder

    var userOnQuestion = 4

    console.log(questions[userOnQuestion - 1].possibleAnswers[0] + "===" +  questions[userOnQuestion - 1].correctAnswer)

    //--------------
    function displayAnswers() {
        //Question
        //Repeat
        for(i = 0; i < triviaArray[userOnQuestion - 1].possibleAnswers.length; i++) {
                    
            $dAnswerButton.attr("data-name", "answerButton" + i).addClass("dAnswerButton" + i).text(triviaArray[userOnQuestion - 1].possibleAnswers[i]);
            //Question
            //Repeat
            // $(".dAnswer" + i).text(triviaArray[userOnQuestion - 1].possibleAnswers[i]);
            console.log("possible answer " + i + ": " + triviaArray[userOnQuestion - 1].possibleAnswers[i]);
            $dAnswerCol.append("<p class='displayAnswerButton displayButton noSelect bold'>");          
        }
    }