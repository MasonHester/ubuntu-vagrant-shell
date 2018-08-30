var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "MasonH7878",
  database: "top_songsDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

// let userInput = process.argv

// let action = userInput[2];

// let subject = userInput.slice(3).join(" ");

function search_by_artist() {
    connection.query(
        "SELECT Song, Year FROM Top5000 WHERE ?",
        {Artist: "Aerosmith"},
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            res.forEach(function(element) {
                console.log(`\n\tSong Name: ${element.Song}
                \n\tYear of Release: ${element.Year}
                \n=|`);
            })
            connection.end();
        }
    )
}

function search_duplicates() {
    connection.query(
        "SELECT Artist, COUNT(*) timesListed FROM Top5000 GROUP BY Artist HAVING timesListed > 1;",
        function(err,res) {
            if(err) throw err;

            console.log(res);
            connection.end();
        }
    )
}

function search_range() {}

search_by_artist();
//search_duplicates();

    

// if(action === "search-by-artist") {
//     search_by_artist(subject);
// }



// }

// var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);