const Hour = document.getElementById("Hour")
const Minutes = document.getElementById("Minute")
const Seconds = document.getElementById("Seconds")
const progressbar = document.getElementById("ProgressLine")
const date = new Date()
let sec = 0;
let hr = 0;
let min = 0;
let Count = 1;
let SetSec = 0;

setInterval(() => {
    // Seconds.innerHTML = ""
    Seconds.innerHTML = getSec()
}, 1000)

function getSec() {

    if (sec >= 60) {
        sec = 0;
        min += 1;
        Minutes.innerHTML = Number(min)
    }
    else if (min >= 60) {
        min = 0;
        hr += 1;
        Hour.innerHTML = Number(hr)
    }
   


    return sec += 1;
}
function UpdateBar(){
    return SetSec+=1
}
progressbar.style.height += 15 + 'px';
setInterval(()=>{
    progressbar.style.width = UpdateBar() + 'px';
    progressbar.style.borderRadius = '1rem';
    // console.log(SetSec);
},1000)
console.log(sec.Count);
progressbar.style.backgroundColor = "green"


