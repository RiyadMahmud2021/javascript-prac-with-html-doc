//Important Notes: 1.Need to call function with object for result
//Important Notes: 2.Class can contains huge functions and properties
//Important Notes: 3.Class works as a "student form" and object works as "student all info" "according to form or class"
//Important Notes: 4.Class and object gives advantages of "reuseability" of codes such as class properties and functions



// Basic Class and Object 
// Tuto Rabbil vai 
//---------------------------------
    class TheClass{


      MyFun(){
          console.log('Hello Riyad');
      } 
      MyFun1(){
          console.log('Hello Salma');
      }
      MyFun2(){
          console.log('Hello Jarin');
      }


    }
    var obj= new TheClass; //object declare

    obj.MyFun();   

    obj.MyFun1();

    obj.MyFun2();

//--------------------------------



// Important Note:1.No need not to call a Constructon function for result, it will call automatically
// Important Note:2.Class name and function name contains same
// Important Note:3.No return type,it's an special function
// Important Note:4.In javascript no need to write construction function name,we need to write only class name ... for fucntion we need to write "Construction" as sysntax.
// Important Note:5.Can pass paremeter when object will be created such as  "var Riyad = new AUser("Riyad","Mahmud","24");""



// constructor with paremeter
// Hitesh
// ------------------------------------ 
  class AUser{

    constructor(myfirstname,mylastname,myage){
    
        this.myfirstname = myfirstname;
        this.mylastname = mylastname;
        this.myage = myage;
    
    }
     
    
    }
    
    var Riyad = new AUser("Riyad","Mahmud","24"); // "new" key word must for creating object from a class 
    console.log(Riyad);
  
//-------------------------------------
  
// constructor with paremeter and a functon 
// Hitesh
//------------------------------------
    class AUser{
    
        constructor(myfirstname,mylastname,myage){
        
            this.myfirstname = myfirstname;
            this.mylastname = mylastname;
            this.myage = myage;
        
        }
        
        getmyfullName(){
     
          // var fullname =  `${this.myfirstname} ${this.mylastname} is my full ................. `; //Here use backtrick  not "" or ' '............
            return `${this.myfirstname} ${this.mylastname} is my full ................. `;
    
        }
        }
        
        var Riyad = new AUser("Riyad","Mahmud","24");
        console.log(Riyad);
        console.log(Riyad.getmyfullName());
    
      
//-------------------------------------
  
  
// constructor with paremeter and  functons(Repalceing and adding news information)  
// Hitesh(H.W.)
// ------------------------------------
  class AUser{
  
      constructor(myfirstname,mylastname,myage){
      
          this.myfirstname = myfirstname;
          this.mylastname = mylastname;
          this.myage = myage;
      
      }
       
      getmyfullName(){
  
        // var fullname =  `${this.myfirstname} ${this.mylastname} is my full ................. `; //Here use backtrick  not "" or ' '............
          return `${this.myfirstname} ${this.mylastname} is my full name ................. `;
  
      }
      editName(newname){
         // how to add other names and edit name // কিভাবে অন্য নাম যুক্ত করা হচ্ছে বা এডিট করা হচ্ছে
         
          var othername = newname.split(' '); //split method used to add extra strimg or edit string
          this.myfirstname = othername [0];
          this.mylastname = othername [1];
         
  
      }
      getMiddlenameToo(midnewname){
  
          var anothername = midnewname.split(' '); 
          this.myfirstname = this.myfirstname + ' ' + anothername;
  
      }
      }
      
      var Riyad = new AUser("Riyad","Mahmud","24");
      console.log(Riyad);
      console.log(Riyad.getmyfullName());
      Riyad.editName('Riyad Rokon');
      console.log(Riyad.getmyfullName());
      Riyad.getMiddlenameToo('Mahmud');
      console.log(Riyad.getmyfullName());
  // //Here we haven't called construction function,but called other functions
      
  // //-------------------------------------
      
      
      


// --------------------------Need to Understand--------------------------------------------------------------------------------
// Anisul Islam
// es6 class, object, set, get
    class Student {
        constructor(id, name) {
          this.id = id;
          this.name = name;
        }
      
        set studentName(name) {
          this.name = name;
        }
        get studentInfo() {
          return this.id + " " + this.name;
        }
      }
      
      let s1 = new Student(101, "Anis");
      console.log(s1.studentInfo);


  // ------------------------------------------------------------------------------------
 