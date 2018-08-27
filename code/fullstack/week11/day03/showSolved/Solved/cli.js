let TV = require("./tv.js");

var tv = new TV;

console.log(tv);

// Grabbing the search type argument..o0*''*0o..o00*''
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a tv show
if (!search) {
  search = "show";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
  term = "Andy Griffith";
}

// Print whether searching for a show or actor, print the term as well
if (search === "show") {
  console.log("Searching for TV Show");
} else {
  console.log("Searching for TV Actor");
}

console.log(search + " " + term);

console.log(search)

// if (search === "show") {
//   console.log(exName.TV);
//   let TempTV = exName.Function;
//   let tempName = new TempTV;
//   tempName.findShow(term)
// }

// else {console.log("not in if")}
