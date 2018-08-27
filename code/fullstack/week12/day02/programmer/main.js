function Programmer(name, title, age, language) {
    this.name = name,
    this.title = title,
    this.age = age,
    this.language = language,
    this.printInfo = function() {
        console.log(this.name);
        console.log(this.title);
        console.log(this.age);
        console.log(this.language)
        console.log("--------------------")
    }
}

let mason = new Programmer("Mason", "Student", 21, "JavaScript");
let notMason = new Programmer("notMason", "notStudent", 21, "notJavascript");

mason.printInfo();
notMason.printInfo();