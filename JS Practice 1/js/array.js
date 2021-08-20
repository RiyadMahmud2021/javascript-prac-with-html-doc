//  Simple Array
 
 var id = [ 
     "R-10",
     "R-11",
     "R-13",
     "R-14",
 ]
 document.write( id[3]+ "<br>" + id[2] + "<br>");
 document.getElementById("array").innerHTML = id;
 document.write(typeof(id));

 //  Simple Array

// ArrayMethod pop()__{ এখানে একটা এ্যারে দেয়া আছে এক এক করে পেছন থেকে বাদ দিয়ে দেখাতে হবে }

 var id1 = [ 
    "RMR-101",
    "SMR-111",
    "TMR-131",
    "UMR-141",
    "VMR-151",
]
document.getElementById("Array2").innerHTML = id1; 
       
function FunOfPOP(){
    var id2 = id1;        
    var converting = id2.pop();
    document.getElementById("ArrayPOPFun").innerHTML = id2;
} 
function FunOfPOPCon(){
    var id2 = id1;        
    var converting1 = id2.pop();
    document.getElementById("ArrayPOPFun1").innerHTML = converting1;
} 
  
// ArrayMethod pop() 

// ArrayMethod push()

function FunOfPush(){
    var id3 = id1;        
    var converting = id3.push("RIYAD-01");
    document.getElementById("FArrayPushFun").innerHTML = id3  ;
}

// ArrayMethod push()__এভাবে shift(),unshift(),slice( প্রথম থেকে পজিশন বেজ ইলিমেন্ট কেটে দেয়),concat( দুটি array যুক্ত করা),delete,lenght ব্যবহার ও বের করা যায়। 
  

// এছাড়াও বিভিন্ন ভাবে javascript এর GET DATE METHODS ব্যবহার করা যায়।