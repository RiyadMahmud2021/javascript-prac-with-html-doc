// // Printing with document.write(), console.log(), alert()
// //---------------------------------------------------------------------------------------
//     document.write("Welcome Best wishes"); // Output functions -> functions that will help us to show output
//     document.write("<h1>Welcome to JS </h1>");
//     document.write("<h2>Welcome to JS1 </h2>");


//     console.log("Welcome to JS"); // To console

//     alert("welcome to js"); //alert() will display an alerting message  

// //---------------------------------------------------------------------------------------



// // keywords -> reserved words for specific reasons. 
// //           example -> for,while, do while, if, else, else if, break, try,catch, function, var, const, let etc.

// // Data type -> string, number (int,float,double), boolean, object. use typeof() to check the data type
// //           comment -> single line comment, double line comment
// //------------------------------------------------------------------------------------------------------------------
//     console.log(typeof (123));  // typeof number int
//     console.log(typeof (123.5)); // typeof number float
//     console.log(typeof ("123")); // typeof number string
//     console.log(typeof (true)); // typeof boolean
//     console.log(typeof (false)); // typeof boolean 

//     //---------------------------------------------------------------------------------------


//     var car;    // No value assigned here.
//     console.log(typeof (car)); //Value is undefined, type is undefined too.
//                             // When Value is undefined, type must be undefined. 

//     //---------------------------------------------------------------------------------------


//     var car = "";    // The value is "", the typeof is "string"
//     console.log(typeof (car)); 


//     //---------------------------------------------------------------------------------------

//     var person = {  // Person Object declearing 
//         firstName:"John", 
//         lastName:"Doe", 
//         age:50, 
//         eyeColor:"blue"       
//         };
//     person = null;  //Here, Assigning value "null"   
//     console.log(typeof (person));  // Now value is null, but type is still an object

    
//     //---------------------------------------------------------------------------------------

//     var person = {  // Person Object declearing  
//         firstName:"John", 
//         lastName:"Doe", 
//         age:50, 
//         eyeColor:"blue"       
//     };
//     person = undefined;  //Here, Assigning value "undefined" .Also,"undefined" is a variable in javascript. 
//     console.log(typeof (person));     //So, Now both value is undefined  and type is undefined 
//                                     // When Value is undefined, type must be undefined. 


//     //---------------------------------------------------------------------------------------

// // Notes for comment -> single line comment, multiple line comment 

//           //This is a single line comment //single line comment

//             /* 
//             This is 
//             multiple line     //multiple line comment 
//             comment
//             */  
// //---------------------------------------------------------------------------------------


// // Variable Naming
// //--------------------------------------------

//     var Name = "Riyad";
//     var Age = 24;
//     var Work = "Developer";
//     var lineBreak = "<br/>"; // variable for line breaking !!!!! 
        
//         var Name = "Riyad", Age = 24, Work = "Developer", lineBreak = "<br/>";

//     document.write("Name : " + Name + lineBreak); 
//     document.write("Age : " + Age + lineBreak);
//     document.write("Work : " + Work + lineBreak);     


// // String  -> a sequnces of characters
// // string concatenation -> adding multiple strings 
// //--------------------------------------------------------------

// var Name1 = "Riyad";
// var Name2 = "Mahmud";

// var fullName = Name1 + " " + Name2;
// console.log(fullName);
// console.log("Today is" + " a " + "beautiful day");
// console.log("My name is " + fullName)


// var num1 = 20;
// var num2 = 30;
// var sum = num1 + num2;
// console.log(num1 + " + " + num2 + " = " + sum);


// string related library functions 
// prompt(), chartAt(5), length
// string.toUpperCase(), string.toLowerCase()
// string1.concat(string2)
// string.slice(0,3)

    // prompt()
    var text = prompt("Enter your name : "); // Getting input from user as string
    document.write("Your name : " + text + "<br/>")

    // length of a string
    var len = text.length; //Finding the length of a string
    document.write("Number of characters : " + len + "<br/>");

    // Finding character with position  charAt(2) 
    document.write(text.charAt(2) + "<br/>"); // finding the character at a specific position

    // toUpperCase(), toLowerCase()
    document.write(text.toUpperCase() + "<br/>"); // Converting the string into uppercase or lowercase
    document.write(text.toLowerCase() + "<br/>"); 


    // Concatenation function: concat()
    var text1 = "hi";
    var text2 = " bye";
    var text3 = text1.concat(text2); // concatenation function
    document.write(text3 + "<br/>");
     
    // Slicing Text: slice(0, 2)                        
    var text4 = "hello";
    var result = text4.slice(0, 2);  // slice function // Here,this will cut after 0,  1 to 2 no charagters.
    document.write(result + "<br/>");   

                    // There are 3 methods for extracting a part of a string:
                            // slice(start, end)
                            // substring(start, end)
                            // substr(start, length)

                // 1) Slice can take positive and negative parameter. 
                // If a parameter is negative, the position is counted from the end of the string.
                        
                        var str = "Apple, Banana, Kiwi";
                        var res = str.slice(-12, -6);  // output - Banana 
                                                       // Here,this will cut after -6, -7 to -12 no charagters.
                        document.write(res + "<br/>");   
 
                        var str = "Apple, Banana, Kiwi";
                        var res = str.slice(7);        // output - Banana, Kiwi
                        document.write(res + "<br/>");   

                // 2) substring() is similar to slice().
                // The difference is that substring() cannot accept negative indexes.

                        var str = "Apple, Banana, Kiwi";
                        var res = str.substring(7, 13); // output - Banana
                                                        // Here,this will cut after 7, 8 to 13 no charagters.
                        document.write(res + "<br/>");

                // 3) substr() is similar to slice().
                // The difference is that the second parameter specifies the length of the extracted part.

                        var str = "Apple, Banana, Kiwi";
                        var res = str.substr(7, 6); // output - Banana // Cut from 8 to (8+6)= 14
                        document.write(res + "<br/>");




// prog 5 completed