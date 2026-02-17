import time from "./time.js";
import alarm from "./alarm.js";

let timeTab=document.getElementById("timeTab");
let alarmTab=document.getElementById("alarmTab");
let mode=document.getElementById("mode");

let timeBox=document.getElementById("timeBox");
let alarmBox=document.getElementById("alarmBox");
time();

timeTab.addEventListener("click",function(){
 alarmBox.innerHTML="";
 time();
})

alarmTab.addEventListener("click",function(){
 timeBox.innerHTML="";
 alarm();
})

mode.addEventListener("click",function(){
 document.body.style.backgroundColor="black";
 mode.style.backgroundColor="white";
})


