//timer

let container = document.getElementById("container");
let time = document.createElement("h1");
let btn = document.getElementById("btn");
let t12 = document.getElementById("t12");
let ampm = document.createElement("span");

let t24 = document.getElementById("t24");

ampm.id = "ampm";

let id24 = createTime24();
let id12;

t24.addEventListener("click", function () {
  clearInterval(id12);
  ampm.textContent = "";
  btn.style.right = "50%";
  id24 = createTime24();
});

//day
let Day = new Date();

let sun = document.getElementById("sun");
let mon = document.getElementById("mon");
let tue = document.getElementById("tue");
let wed = document.getElementById("wed");
let thu = document.getElementById("thu");
let fri = document.getElementById("fri");
let sat = document.getElementById("sat");

let dayArray = [sun, mon, tue, wed, thu, fri, sat];

dayArray[Day.getDay()].style.color = "white";

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
