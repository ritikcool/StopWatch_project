var isStop=true;
var sec=0;
var min=0;
var hr=0;
 
// to start the stopwatch

function start(){
    if(isStop==true){
        isStop=false
        timer();
    }
}

// function call 
function timer(){

    if(isStop==false){
   
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);
        sec++;

        if(sec==60){
            sec=0;
            min++;
        }

        if(min==60){
            min=0;
            hr++;
        }

        if(sec<10){
            sec="0" + sec;

        }
        if(min<10){
            min="0" + min;

        }
        if(hr<10){
            hr="0" + hr;

        }
        stopwatch.innerHTML= hr + ":" + min + ":" + sec; 
        setTimeout("timer()", 1000);
    }
}

//  to stop
function stop(){
    isStop=true;
}

 
// to reset
function reset(){
    isStop=true;
    sec=0;
    min=0;
    hr=0;
    stopwatch.innerHTML= "00:00:00"
}
