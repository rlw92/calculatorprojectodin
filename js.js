let x=0;
let y =0;
let z;
let l;
let dis=[];


document.querySelector("#one").addEventListener("click",()=>{x+= "1"; document.querySelector(".screen").textContent += "1";});
document.querySelector("#two").addEventListener("click",()=>{x+= "2"; document.querySelector(".screen").textContent += "2";});
document.querySelector("#three").addEventListener("click",()=>{x+= "3"; document.querySelector(".screen").textContent += "3";});
document.querySelector("#four").addEventListener("click",()=>{x+= "4"; document.querySelector(".screen").textContent += "4";});
document.querySelector("#five").addEventListener("click",()=>{x+= "5"; document.querySelector(".screen").textContent += "5";});
document.querySelector("#six").addEventListener("click",()=>{x+= "6"; document.querySelector(".screen").textContent += "6";});
document.querySelector("#seven").addEventListener("click",()=>{x+= "7"; document.querySelector(".screen").textContent += "7";});
document.querySelector("#eight").addEventListener("click",()=>{x+= "8"; document.querySelector(".screen").textContent += "8";});
document.querySelector("#nine").addEventListener("click",()=>{x+= "9"; document.querySelector(".screen").textContent += "9";});
document.querySelector("#multiply").addEventListener("click",()=>{z=multiply;dis.push(x); x=0; document.querySelector(".screen").textContent += "*";});
document.querySelector("#plus").addEventListener("click",()=>{z=plus;dis.push(x); x=0; document.querySelector(".screen").textContent += "+";});
document.querySelector("#minus").addEventListener("click",()=>{z=minus;dis.push(x); x=0; document.querySelector(".screen").textContent += "-";});
document.querySelector("#divide").addEventListener("click",()=>{z=divide;dis.push(x); x=0; document.querySelector(".screen").textContent += "/";});
document.querySelector("#equal").addEventListener("click",()=>{dis.push(x);l=z();document.querySelector(".screen").textContent = l; x=l; dis=[];})
document.querySelector("#clear").addEventListener("click",()=>{x=0;dis=[];document.querySelector(".screen").textContent = "";})
function plus(){
z = plus;
   return x+y;
   console.log(x+y);
}

function minus(){
    z= minus;
    return x-y;
}

function divide(){
    z= divide;
    return x/y;
}

function multiply(){
    z= multiply;
    return +dis[0] * +dis[1];
}

function operate(){
    
   l = z();
    return l;
    document.querySelector(".screen").textContent = "HI";
    console.log(l);
}
