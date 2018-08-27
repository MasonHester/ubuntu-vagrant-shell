// dataRef.ref().on("child_added", function(childSnapshot) {
     
//     // Log everything that's coming out of snapshot
//     console.log(childSnapshot.val().name);
//     console.log(childSnapshot.val().name);
//     console.log(childSnapshot.val().role);
//     console.log(childSnapshot.val().startDate);
//     console.log(childSnapshot.val().monthlyRate);
   
//     // full list of items to the well
//     $("#currentEmployee").append("<div class='well'><span class='member-name'> " + childSnapshot.val().name +
//       " </span><span class='member-role'> " + childSnapshot.val().role +
//         " </span><span class='member-startDate'> " + childSnapshot.val().startDate +
//           " </span><span class='member-monthlyRate'> " + childSnapshot.val().monthlyRate + " </span></div>");
          
//     // Handle the errors
//    }, function(errorObject) {
//     console.log("Errors handled: " + errorObject.code);
//    });
//    function(snapshot) {
//     // Change the HTML to reflect

//     $("#name-display").text(snapshot.val().name);
//     $("#role-display").text(snapshot.val().email);
//     $("#startDate-display").text(snapshot.val().age);
//     $("#monthyRate-display").text(snapshot.val().comment);
//    });

//    for(lengthofarray) {
//        var $currentEmployeeList = $("#current-employee-list");
//        var 
//    }