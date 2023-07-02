const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");



let hr =0; 
let min =1;
let sec= 0;
/*const restartTimer = () => {
  clearInterval(timeloop);
  hr = 0;
  min = 1;
  sec = 0;
  setTime = hr * 3600000 + min * 60000 + sec * 1000;
  startTime = Date.now();
  futureTime = startTime + setTime;
  timeloop = setInterval(countDownTime);
};*/




const updateTimer = () => {
  


  setTime +=10000
  futureTime += 10000
  
};


btn1.addEventListener("click", updateTimer);
let isTimerPaused = false;

const toggleTimer = () => {
  isTimerPaused = !isTimerPaused;
  if (isTimerPaused) {
    clearInterval(timeloop);
  } else {
    timeloop = setInterval(countDownTime);
  }
};


let hours = hr*3600000;
let minutes = min*60000;
let seconds = sec*1000;
let setTime = hours + minutes + seconds;
let startTime = Date.now();
let futureTime = startTime+setTime;

let timeloop = setInterval(countDownTime);

countDownTime();
function countDownTime(){
 
  let currentTime = Date.now();
  let timeLeft = futureTime - currentTime;
  let angle = (timeLeft/setTime)*360;
  console.log("hey...")
  

  //progress indicator 
  if(angle>180){
    semicircles[2].style.display = 'none';
    semicircles[0].style.transform = 'rotate(180deg)';
    semicircles[1].style.transform=`rotate(${angle}deg)`;
  }
  else{
    semicircles[2].style.display = 'block';
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform=`rotate(${angle}deg)`;

  }
  

  let hrs =Math.floor((timeLeft/(1000*60*60)) %24);
  let mins =Math.floor((timeLeft/(1000*60))%60);
  let secs =Math.floor((timeLeft/(1000)) %60);
  console.log(hrs,mins,secs)



  //timer

  timer.innerHTML =`
  
  <div>${hrs}</div>
  <div class="colon">:</div>
  <div>${mins}</div>
  <div class="colon">:</div>
  <div>${secs}</div>
  `;
  if(timeLeft<0){
    clearInterval(timeloop);
    semicircles[0].style.display = 'none';
    semicircles[1].style.display = 'none';
    semicircles[2].style.display = 'none';
      //timer

    timer.innerHTML =`
    
    <div>00</div>
    <div class="colon">:</div>
    <div>00</div>
    <div class="colon">:</div>
    <div>00</div>
    `;
    }
  
}


document.getElementById("btn2").addEventListener("click", toggleTimer);




