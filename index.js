document.getElementById("wipe-text").style.animation= "wipeout 1s linear 2.1s";
const texts=["RIDE","OWER","URPOSE","RINCIPLE","REPARATION","LANNING","RACTICE","OINT","RODUCTIVITY","ATIENCE","ERSEVERANCE","HOENIX"];
let i=0;
let toggle=false;
setInterval(
        () => {      
        
        if (i < texts.length) {
                document.getElementById("wipe-text").innerHTML = texts[i];
                if (i==11)
                {
                        document.getElementsByClassName("wipe-container")[0].classList.toggle("orange");
                        document.getElementsByClassName("cc")[0].classList.toggle("orange");
                        toggle=true;
                }
                document.getElementById("wipe-text").style.animation = "wipein 1s linear,wipeout 1s linear 2s";
                setTimeout(() => {

                        document.getElementById("wipe-text").innerHTML = "";
                        document.getElementById("wipe-text").style.animation = "";
                        if(toggle)
                        {
                                document.getElementsByClassName("wipe-container")[0].classList.toggle("orange");
                                document.getElementsByClassName("cc")[0].classList.toggle("orange");
                                toggle=false;    
                        }
                }, 3000); i++;
        } else {
                i = 0;
                document.getElementById("wipe-text").innerHTML="HOENIX";
        }

},3100);

