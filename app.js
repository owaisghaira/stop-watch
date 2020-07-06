var milisec =0;
var sec = 0;
var mint = 0;
var interval;

var getmili = document.getElementById("miliId")
var getsec = document.getElementById("secId")
var getmin = document.getElementById("minId")

function timer(){
    milisec++
    getmili.innerHTML = milisec
    if (milisec == "99"){
        milisec=0;
        sec++
        getsec.innerHTML = sec
    }
    else if(sec == "60"){
        sec = 0;
        mint++
        getmin.innerHTML = mint;
    }

}
function start(){
interval = setInterval(timer,10)

}
function stop(){
    clearInterval(interval)
}
function reset(){
    milisec = 00;
    sec = 00;
    mint = 00;
    getsec.innerHTML = sec
    getmin.innerHTML = mint;
    getmili.innerHTML = milisec
    clearInterval(interval)
}
