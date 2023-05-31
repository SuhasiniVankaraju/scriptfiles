/*let name="suhas"
let age=20
const DOB="19/12/2002"
document.write(name+"<br>")
document.write(DOB)
document.write(age+"<br>")
name="kutty"
document.write(name+"<br>")*/
/*const mobileno=23456778
document.write(mobileno)*/


var name="suhas"/*global variable*/
var age=0;
function js(){
    age=20/*(local variable)*/
    //document.write(name+"<br>")
    //document.write(age+"<br>")
}
js()
document.write(name+"<br>")
document.write(age)
    
      var student={
          nam:"suhas",
          rnum:493,
          email:"vsuhasini493@gmail.com"
      }
      for(let x in student){
      /*document.write(student.nam+"<br>")
      document.write(student.rnum+"<br>")*/
      document.write(student[x]+"<br>")
      }