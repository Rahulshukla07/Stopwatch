var button1= document.querySelector('#start');
var button2= document.querySelector('#stop');
var button3= document.querySelector('#reset');
var appendhundreds=document.querySelector('#hundreds');
var appendseconds=document.querySelector('#seconds');
var appendminutes=document.querySelector('#minutes');
let minutes =0;
let seconds =0;
let hundreds =0;

let interval;

// Events
button1.addEventListener('click',start)
button2.addEventListener('click',stop)
button3.addEventListener('click',reset)

// Function

function stopWatch(){
    hundreds++;
    if(hundreds<10){
        appendhundreds.innerHTML='0'+hundreds ;
    }else{
        appendhundreds.innerHTML=hundreds;
        if(hundreds/59===1){
            hundreds=0;
            seconds++;
            if(seconds<10){
                appendseconds.innerHTML='0'+seconds + ':';
            }else{
                appendseconds.innerHTML=seconds+ ':';
                if(seconds/59===1){
                    seconds=0;
                    minutes++;
                    if(minutes<10){
                        appendminutes.innerHTML='0'+ minutes + ':';
                    }
                }
            }
        }
    }
}



function start(){
    interval=setInterval(stopWatch,1000);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval)
    hundreds='00';
    seconds='00';
    minutes='00';
    appendhundreds.innerHTML=hundreds;
    appendseconds.innerHTML=seconds + ':';
    appendminutes.innerHTML=minutes + ':';
}
