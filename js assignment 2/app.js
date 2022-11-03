
// *****Prompt*****
var question = "Your Religion";
var myAnswer = "Islam";
var ask = prompt(question, myAnswer);


var age = +prompt("Your Age");
console.log(age);

// *****if else statement with comparisn*****

//       Mark Sheet
var sub1 = +prompt("Enter marks of english");
var sub2 = +prompt("Enter marks of math");
var sub3 = +prompt("Enter marks of physics");
var sub4 = +prompt("Enter marks of chemistry");
var sub5 = +prompt("Enter marks of computer");
var totalMarks = 500;
var obtainMarks = sub1 + sub2 + sub3 + sub4 + sub5;
var percent = (obtainMarks / totalMarks) * 100;
console.log(percent + "%");

if (percent >= 80){
    console.log("A+ grade");
} else if (percent >= 70 && percent <= 80){
    console.log("A grade");
} else if (percent >= 60 && percent <= 70){
    console.log("B grade");
} else if (percent >= 50 && percent <= 60){
    console.log("C grade");
} else {
    console.log("fial");
}

// *****nested if*****

var age = prompt("Enter your age");
var studentID = "Yes";
if (age > 18){
    if (studentID == "Yes"){
        console.log("You can participate");
    }
}

    // *****Arrays*****
var cities = ["Karachi", "Islamabad", "Hydrabad", "Lahore"];
alert("Welcome to " + city[2]);





















