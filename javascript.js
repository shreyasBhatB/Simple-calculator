



function cal(){
    let num1=document.querySelector("#n1").value ;
    let op=document.getElementById("opr").value;
    let num2=document.getElementById("n2").value ;
    let res;

    num1=parseFloat(num1)
    num2=parseFloat(num2)
    if(op=="+"){
     res=num1+num2;
    }
    else if(op=="-"){
     res=num1-num2;}
        
    else if(op=="*"){
     res=num1*num2;}
         
    else if(op=="/"){
     res=num1/num2;}
         
       
     document.getElementById("output").innerHTML="Your answer is"+" "+res;
    
        
} 
