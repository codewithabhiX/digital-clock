import time from "./time.js";
import alarm from "./alarm.js";

let timeTab=document.getElementById("timeTab");
let alarmTab=document.getElementById("alarmTab");

let title=document.getElementById("title");

let mode=document.getElementById("mode");

let box=document.getElementById("box");


time();

timeTab.addEventListener("click",function(){
 box.textContent="";
 time();
})

alarmTab.addEventListener("click",function(){
 box.textContent="";
 alarm();
})
let isDark=true;
mode.addEventListener("click",function(){
    if(isDark){
 document.body.style.backgroundColor="#212121";
 mode.style.backgroundColor="white";
 title.style.color="white";
 isDark=false;
}else{
 document.body.style.backgroundColor="white";
 mode.style.backgroundColor="#212121";
 title.style.color="black";
 isDark=true;
}

})


 



