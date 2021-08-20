// ===================***====================
// object
var stu = {
    firstName: "Riyad",
    lastName:"Islam",
    roll:"23",
    age: "24"
}
document.write(stu.roll + "<br>");
// object
// ===================***====================

// ===================***====================
// function in object property
var stu = {
    firstName: "Riyad",
    lastName: "Mahmud",
    roll:"23",
    age: 24,
    full_Name: function(){   //see the syntax, obj ar property ta ki vaba function use korbo
        return this.firstName +" "+ this.lastName;
    }
}
document.write(stu.roll + "<br>");
document.write(stu.full_Name() + "<br>");
// function in object property
// ===================***====================