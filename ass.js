function hat(){
    let x=document.getElementById("inp").value
    let y=document.getElementById("inp1").value
    if(x=="" && y=="")
      document.write("not entered name  and  mail")
      else if(y=="")
      document.write("enter email")
      else if(x=="")
      document.write("enter name")
      else
     alert("success")
}