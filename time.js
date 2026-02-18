//timer
export default function time(){
let box = document.getElementById("box");

let outsideOfClock = document.createElement("div");
outsideOfClock.id="outsideOfClock";

let container = document.createElement("div");
container.id="container";

let changetime = document.createElement("div");
changetime.id="changetime";

let day = document.createElement("div");
day.id="day";

let time = document.createElement("h1");

let btn  = document.createElement("button");
btn .id = "btn";
let t12 = document.createElement("button");
t12.id = "t12";
let t24 = document.createElement("button");
t24.id = "t24";

let ampm = document.createElement("span");
ampm.id = "ampm";


//day
let Day = new Date();

let sun = document.createElement("span");
sun.id = "sun";
sun.textContent="SUN";
let mon = document.createElement("span");
mon.id = "mon";
mon.textContent="MON";
let tue = document.createElement("span");
tue.id = "tue";
tue.textContent="TUE";
let wed = document.createElement("span");
wed.id = "wed";
wed.textContent="WED";
let thu = document.createElement("span");
thu.id = "thu";
thu.textContent="THU";
let fri = document.createElement("span");
fri.id = "fri";
fri.textContent="FRI";
let sat = document.createElement("span");
sat.id = "sat";
sat.textContent="SAT";

let dayArray = [sun, mon, tue, wed, thu, fri, sat];

for(let i=0;i<dayArray.length;i++){
  day.appendChild(dayArray[i]);
}

container.appendChild(day);
outsideOfClock.appendChild(container);
box.appendChild(outsideOfClock);
dayArray[Day.getDay()].style.color = "white";



box.appendChild(changetime);
changetime.appendChild(t24);
t24.textContent="24";
changetime.appendChild(t12);
t12.textContent="12";
changetime.appendChild(btn);

let id24 = createTime24();
let id12;


t24.addEventListener("click", function () {
  clearInterval(id12);
  ampm.textContent = "";
  btn.style.right = "50%";
  id24 = createTime24();
});


//12hour;

t12.addEventListener("click", function () {
  clearInterval(id24);
  btn.style.right = "0";
  id12 = createTime12();
});

function createTime12() {
  let id = setInterval(function () {
    let now = new Date();

    let hour = now.getHours();
    let minute = String(now.getMinutes()).padStart(2, "0");
    let second = String(now.getSeconds()).padStart(2, "0");

    if (hour >= 12) {
        
      if (hour == 12) {
        hour = 12;
      } else {
        hour = hour % 12;
      }
       ampm.textContent = "PM";
      time.innerHTML = `${String(hour).padStart(2, "0")}:${minute}:${second}`;
     
    } else {
        console.log(hour)
      if (hour == 0) {
        hour = 12;
      }
      ampm.textContent = "AM";
      time.innerHTML = `${String(hour).padStart(2, "0")}:${minute}:${second}`; 
    }
  }, 1000);

  container.appendChild(time);
  container.appendChild(ampm);
  return id;
}

function createTime24() {
  let id = setInterval(function () {
    let now = new Date();
    let hour = String(now.getHours()).padStart(2, "0");
    let minute = String(now.getMinutes()).padStart(2, "0");
    let second = String(now.getSeconds()).padStart(2, "0");
    time.innerHTML = `${hour}:${minute}:${second}`;
  }, 1000);
  container.appendChild(time);
  return id;
}
}