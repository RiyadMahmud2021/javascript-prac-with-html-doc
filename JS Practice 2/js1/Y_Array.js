 

// Add Hello with every name and use array and loop to print them 
// **************************************************************
// Stack Learner

var nm = []; // array declare

nm[0] = 'Riyad';
nm[1] = 'Mahmud';
nm[2] = 'Rokon';
 
for ( a = 0 ; a < nm.length ; a++ ){
    console.log('Hello,' +  nm[a]);
}


// **************************************************************


// Add Hello with every name and use array and loop to print them as uppercase 
// *************************************************************************** 
// Stack Learner 
var nm = ['Rokon','Mahmud','Riyad']; // array declare

 
for ( var a = 0 ; a < nm.length ; a++ ){
    console.log('Hello,' + nm[a].toUpperCase());
}


// *************************************************************************** 


// Add Hello with every name and use array and loop to print them as LowerCase 
// *************************************************************************** 
// Stack Learner
var nm = ['Rokon','Mahmud','Riyad']; // array declare

 
for ( var a = 0 ; a < nm.length ; a++ ){

    console.log('Hello,' + nm[a].toLowerCase()); 
    // see google to know about "toLowerCase()" and this kind of builtin functions
              
}


// *************************************************************************** 

 

// Others 
// *************************************************************************** 
// Stack Learner
var nm = ['Rokon','Mahmud','Riyad']; // array declare

console.log(nm.length); // array length 

console.log(nm[2]); // selective number elements of an array 

console.log(nm[nm.length - 1]); //last element of array

console.log(nm.indexOf('Mahmud')); // getting index number 

nm.push('Slm','Jarin','Abba','Amma','1'); // pushing elements
console.log(nm)

// console.log(nm.length); // increased to 7 

var nm = ['Riyad','Mahmud','Rokon','Slm','Jarin','Abba','Amma','1'];
nm.splice(5, 2 ,'3');// (where to replace or কোথায় রিপ্লেস করবো, 
                     // number of replacing area or কয়টার উপর রিপ্লেস করবো
                     // replacing value or কি ভ্যালু রিপ্লেস করবো)

console.log(nm);

var sortedA =  nm.sort();
console.log(sortedA); // increased to 7 