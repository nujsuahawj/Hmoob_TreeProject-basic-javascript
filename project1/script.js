window.onload=function(){
    var tens =00;
    var seconds=00;
    // var thir=00;
    var appendTens = document.getElementById("tens");
    var appendsseconds = document.getElementById("seconds");
    // var appendthir = document.getElementById("thir");
    var star = document.getElementById("button-start");
    var stop = document.getElementById("button-stop");
    var reset = document.getElementById("button-reset");
    var Interval;
    star.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(starTimer,1);
    }
    stop.onclick = function(){
        clearInterval(Interval);
    }
    reset.onclick = function(){
        clearInterval(Interval);
        tens ="00";
        seconds ="00";
        appendTens.innerHTML=tens;
        appendsseconds.innerHTML =seconds;

    }
    function starTimer(){
        tens++;
        if(tens < 9){
            appendTens.innerHTML="0"+tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }
        if(tens>99){
            seconds++;
            appendsseconds.innerHTML="0"+seconds;
            tens=0;
            appendsseconds.innerHTML="0"+0;
        }
        if(seconds >9){
            appendsseconds.innerHTML=seconds;
        }
        // if(seconds>99){
        //     thir++;
        //     appendthir.innerHTML="0"+thir;
        //     seconds=0;
        //     appendthir.innerHTML="0"+0;
        // }
        // if(thir>9){
        //     appendthir.innerHTML=thir;
        // }
    }
}