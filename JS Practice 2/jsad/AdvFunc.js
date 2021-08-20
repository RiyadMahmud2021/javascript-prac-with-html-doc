// Taking input from array and making square of array every index's value and put them in a array
// forEach()
// Output will be an array

var num = [ 2, 3, 45, 8]
var sqNum = []

num.forEach(function(x){ //Here, forEatch catching every index of array as input for annonemus functin
    sqNum.push(x*x);
});
document.write("Using forEach() sqNum is: " + sqNum + "</br>");
document.write("</br>"); 



// Taking input from array and making square of array every index's value and put them in a array
// map()
// Output will be an array

var num = [ 2, 3, 45, 8]
var sqNum = num.map(function(x){ //Here, forEatch catching every index of array as input for annonemus functin
    return(x*x);
}); 
document.write(" Using map() sqNum is: " + sqNum);
document.write("</br>"); 



// Filtering data with condition
// filter() : 
// Output will be also an array

var num = [ 2, 3, 45, 8]
var filteredNum = num.filter(function(x){ //Here, forEatch catching every index of array as input for annonemus functin
    return(x<10); 
}); 
document.write(" Using filter() filteredNum is: " + filteredNum); 
document.write("</br>"); 



// Math.max(), 

var num1 = parseInt(prompt("Enter first num:"));
var num2 = parseInt(prompt("Enter first num:"));


var max = Math.max(num1,num2);
document.write("max: " + max); 
document.write("</br>"); 


// Math.floor()

var num1 = parseInt(prompt("Enter first num for flooring:"));

var flooringNum = Math.floor(num1);
document.write("flooring: " + flooringNum); 
document.write("</br>"); 

// Math.floor(), Math.random() //Print number which print number 0 to 20

var flooringRandomNum = Math.floor(Math.random() * 10 + 11 );
document.write("flooringRandomNum: " + flooringRandomNum);  
document.write("</br>");     


