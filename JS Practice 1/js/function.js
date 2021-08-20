// ===================***====================
// calling function
// function myfun(a,b){
//     document.write("Sum:" + (a+b) + "<br>");
//     document.write("Sum:" + (a-b) + "<br>");
//     document.write("Sum:" + (a*b) + "<br>");
//     document.write("Sum:" + (a/b) + "<br>");
//     document.write("<br>");
// }
// myfun(30,70);
// myfun(20,70);
// myfun(10,70);

// //calling function
// // ===================***====================

// // ===================***====================
// // returning function
// function returningfun(a,b){
//     return a + b;
// }
// var z = returningfun(40,70);
// document.write(z);
// document.getElementById("innerHTMLText_6").innerHTML = z;
// returning function
// ===================***====================

// ===================***====================
// function in object property
// var stu = {
//     firstName: "Riyad",
//     lastName: "Mahmud",
//     roll:"23",
//     age: 24,
//     full_Name: function(){   //see the syntax, obj ar property ta ki vaba function use korbo
//         return this.firstName +" "+ this.lastName;
//     }
// }
// document.write(stu.roll + "<br>");
// document.write(stu.full_Name() + "<br>");
// function in object property
// ===================***====================

// ===================***====================
// arrow function 

// 1.
hello = () => {
    p ='Assalamu Alikum';
    document.getElementById("innerHTMLText_7").innerHTML = p;
}
// 2. 
sum = (a,b) => {
     return a+b;
}
alert(sum(10,15)); 
// 3.


// arrow function  
// ===================***====================