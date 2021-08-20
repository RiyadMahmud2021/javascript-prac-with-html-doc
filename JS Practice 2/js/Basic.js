
// Printing
document.write("<h1>Printing Result</h1>");
//---------------------------------------------------------------
document.write("Name : Riyad Mahmud ") 
document.write("<br>");
document.write("<br>");



// A program to understand string library functions
document.write("<h1>A program to understand string library functions Result</h1>");
//----------------------------------------------------------------

    var firstName = prompt("Enter first Name : ") // Getting firstname and lastname from user
    var lastName = prompt("Enter Last name")

    var fullName = firstName + lastName; //Adding firstname and lastname

document.write("Fullname is : " + fullName + "<br/>") //Printing the full name // See the <br/> 
document.write("Length of full name : " + fullName.length + "<br/>") //Printing the length of full name  
document.write("Uppercase Full name : " + fullName.toUpperCase()) //printing the full name in uppercase
document.write("<br>");
document.write("<br>");



// A program that calculates addition, subtraction, multiplication, division and remainder of 2 numbers
document.write("<h1>A program that calculates addition, subtraction, multiplication, division and remainder of 2 numbers Result</h1>");
//----------------------------------------------------------------

var num1, num2, sum, sub, mul, div, rem; //Declaring all the variables

num1 = parseInt(prompt("Enter First Number : ")) // Getting num1 and num2 and also converting them into Integer. REMEMBER the default data type of prompt is String
num2 = parseInt(prompt("Enter Second Number : ")) // Javascript take input as string***

    sum = num1 + num2 //Calculating the sum 
    document.write("Addition = " + sum + "<br/>")
    document.write("<br>");

    sub = num1 - num2 //Calculating the sub 
    document.write("subtraction = " + sub + "<br/>")
    document.write("<br>");

    mul = num1 * num2 //Calculating the multiplication 
    document.write("Multiplication = " + mul + "<br/>")
    document.write("<br>");

    div = num1 / num2 //Calculating the division
    document.write("Division = " + div + "<br/>")
    document.write("<br>");

    rem = num1 % num2 //Calculating the remainder
    document.write("Remainder = " + rem + "<br/>")

    document.write("<br>");
    document.write("<br>");




// Letter Grade Program. Happy coding
document.write("<h1>Letter Grade Program. Happy coding Result</h1>");
//----------------------------------------------------------------

var marks = parseInt(prompt("Enter Marks : ")) //Taking Input

    if (marks >= 80)   // Checking the conditions 
        document.write("A+")
    else if (marks >= 70)
        document.write("A")
    else if (marks >= 60)
        document.write("A-")
    else if (marks >= 50)
        document.write("B")
    else if (marks >= 40)
        document.write("C")
    else if (marks >= 33)
        document.write("D")
    else
        document.write("You are Failed") 

        document.write("<br>");
        document.write("<br>");




// Vowel or connsonant program using switch
document.write("<h1>Vowel or connsonant program using switch Result </h1>");
//----------------------------------------------------------------

var letter = prompt("Enter a letter : ")
letter = letter.toLowerCase() // For this if user give upeer case or olower case number it will not be fact

switch (letter) { // Checking the conditions for vowel and consonant
    case "a":
    case "e":
    case "i":
    case "o":
    case "u": // Giving case at a time, no need repeat document.write again and again 
        document.write("Vowel");
        break;
    default: 
        document.write("Consonant");
}
document.write("<br>");
document.write("<br>");




// A program that will five you sum of all numbers from 1 to 100  
document.write("<h1>A program that will five you sum of all numbers from 1 to 100 Result</h1>");
//---------------------------------------------------------------------------------------------

var sum = 0
var i = 1

for (i = 1 ;i <= 100; i++ ){
    sum = sum + i;
}
document.write("sum is : " + sum); 
document.write("<br>");
document.write("<br>");




// A program that will five you sum of all numbers from 1 to 100 that are divisible by 3 and 5
document.write("<h1>A program that will five you sum of all numbers from 1 to 100 that are divisible by 3 and 5 Result</h1>");
//---------------------------------------------------------------------------------------------

var sum = 0
var i = 0

for (i = 1 ;i <= 100; i++ ){
    if (i % 3 == 0 && i % 5 == 0 ){

        sum = sum + i;

    };
};
document.write("sum is : " + sum); 
document.write("<br>");
document.write("<br>");



