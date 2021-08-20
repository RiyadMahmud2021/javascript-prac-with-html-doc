// ===================***====================
// 7 Coders
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
// 7 Coders

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





// Object Concept and Calling
// Rabbil vai 
var billGates = {
 
    shirt: true,
    shirtColor:"offWhite",
    smile:true,
    swatter:true,
    swatterColor: "gray",
    chosma: true

}
var billGatesPro = {

    shirt:{
        color:"offWhite",
        Quality:"Good",
        price:"200 USD",
    },

    swatter:{
        color:"gray",
        Quality:"Good",
        price:"240 USD",
        warm:"Best",
    },

    face:{
        smiling:"Yes",
        chosma:"Yes",
        teeth:"white",
    }
}
console.log(billGates['shirtColor']);
console.log(billGatesPro['shirt'],billGatesPro['shirt']['price']); //note: having a comma
console.log(billGatesPro['shirt'] ['price']); //note: no comma
// ------------------------------------------------------------------------------