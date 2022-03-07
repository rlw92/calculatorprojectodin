let x=0;
let z=plus;
let l;
let dis=[0];
let screen = document.querySelector(".screen");


//numbers
document.querySelector("#one").addEventListener("click",()=>{x+= "1"; document.querySelector(".screen").textContent += "1";});
document.querySelector("#two").addEventListener("click",()=>{x+= "2"; document.querySelector(".screen").textContent += "2";});
document.querySelector("#three").addEventListener("click",()=>{x+= "3"; document.querySelector(".screen").textContent += "3";});
document.querySelector("#four").addEventListener("click",()=>{x+= "4"; document.querySelector(".screen").textContent += "4";});
document.querySelector("#five").addEventListener("click",()=>{x+= "5"; document.querySelector(".screen").textContent += "5";});
document.querySelector("#six").addEventListener("click",()=>{x+= "6"; document.querySelector(".screen").textContent += "6";});
document.querySelector("#seven").addEventListener("click",()=>{x+= "7"; document.querySelector(".screen").textContent += "7";});
document.querySelector("#eight").addEventListener("click",()=>{x+= "8"; document.querySelector(".screen").textContent += "8";});
document.querySelector("#nine").addEventListener("click",()=>{x+= "9"; document.querySelector(".screen").textContent += "9";});
document.querySelector("#zero").addEventListener("click",()=>{x+= "0"; document.querySelector(".screen").textContent += "0";});
//operators
document.querySelector("#multiply").addEventListener("click",()=>{ongo();z=multiply; x=0;document.querySelector(".screen").textContent += "*";});
document.querySelector("#plus").addEventListener("click",()=>{ongo();z=plus; x=0; document.querySelector(".screen").textContent += "+";});
document.querySelector("#minus").addEventListener("click",()=>{ongo();z=minus; x=0; document.querySelector(".screen").textContent += "-";});
document.querySelector("#divide").addEventListener("click",()=>{ongo();z=divide; x=0; document.querySelector(".screen").textContent += "/";});
document.querySelector("#equal").addEventListener("click",()=>{l=ongo();document.querySelector(".screen").textContent = l.toFixed(0);; x=0;z=plus;})
document.querySelector("#clear").addEventListener("click",()=>{x=0;dis=[0];z=plus;document.querySelector(".screen").textContent = "";})

function ongo(){
    if(z===divide && +x===0){alert("Can not divide by Zero, press clear to continue")
return "Unable to divide by Zero big man.";}
    else{
     dis.push(x);
     y= z();  
     dis.shift();
     dis.shift();
     dis.push(y);
   return y;}}

function plus(){
z = plus;
   
   return +dis[0] + +dis[1];
   
}

function minus(){
    z= minus;
    return +dis[0] - +dis[1];
}

function divide(){
    z= divide;
    return +dis[0] / +dis[1];
}

function multiply(){
    z= multiply;
    return +dis[0] * +dis[1];
}

