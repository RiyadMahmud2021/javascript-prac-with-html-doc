// ECMAScript 2015 (ES6) 


// ----------------------------------------------------------------------------------------------------------
// Variable declaration: let and const.
// block scope, redecalre is allowed for var but not for let and constant, 
 
    var x = 20;  
    var x = 30; // redeclare is allowed but for let and const it is not possible

    let y = 10; 

    const c = 20; 
    // c = 25; // it is not valid, you can not change const variable value, but for var and let it is possible

    console.log("Outside if let x,y,c = " + x + ',' + y + ',' + c); 



// ----------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------
 
// sync vs async(setTimeout() )

// Synchronous  
// js is single threaded, synchronous programming language.
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
    
    console.log("------------------------------------");
    console.log("Example of Synchronous programming");
    console.log(`Task 1`);
    console.log(`Task 2`);
    console.log(`Task 3`);
    console.log(`Task 4`); 
    console.log("------------------------------------\n\n");

// asynchronous function
// setTimeout()  
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
// setTimeout() will move the task into web APIs where the task will be running in background
// other task will continue in call stack
// when the call stack is completely empty then task (callback functions) from web APIs will be moved to task queue (FIFO)
// when the entire call stack is empty then from task queue task will moved to call stack and the process is done


console.log("Example of Asynchronous programming");
 
const taskOne = () => {
  console.log(`Task 1`);
};

const taskTwo = () => {
  setTimeout(() => {
    console.log(`Task 2`);
    console.log("------------------------------------");
  }, 5000);
};

const taskThree = () => {
  console.log(`Task 3`);
};
const taskFour = () => {
    setTimeout(() => {
        console.log(`Task 4`);
        console.log("------------------------------------");
      }, 6000);
};

taskOne();
taskTwo();
taskThree();
taskFour();


// Callback function and higher order function
// Using callback we can make our code non blocking and it can work asynchronusly 

 
    const printSquare = (x) => {
        
      console.log(`The square is ${x * x}`);
    
    };

    const printMul = (x,y) => {
        
      console.log(`The Mul is ${x * y}`);
    
    };
    

    const square = printSquare;
    const Mul = printMul;

      square(10);   
      Mul(10,9);
    
    const higherOrderFunction = (y, callback) => { //HigherOrder Func with callback parameter 
    
        callback(y);  
     
    };
    const higherOrderFunction1 = (x , y, callback) => { //HigherOrder Func with callback parameter
    
        callback(x,y);  
   
    }; 
    
    higherOrderFunction(5, square); // callbacking a function to HigherOrder Func 
    higherOrderFunction1(5,6, Mul); // callbacking a function to HigherOrder Func 
    
    
    
// ----------------------------------------------------------------------------------------------------------
