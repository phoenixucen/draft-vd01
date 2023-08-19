document.getElementById("wipe-text").style.animation= "wipeout 1s linear 2.1s";
const texts=["RIDE","OWER","URPOSE","RINCIPLE","REPARATION","LANNING","RACTICE","OINT","RODUCTIVITY","ATIENCE","ERSEVERANCE","HOENIX"];
let i=0;
setInterval(
        () => {      
        
        if (i < texts.length) {
                document.getElementById("wipe-text").innerHTML = texts[i];
                if (i==11)
                {
                        for(let o = 0; o < document.getElementsByClassName("orange").length ; o++ ){
                                 document.getElementsByClassName("orange")[o].style.color = "#FD841F";
                        }
                }
                document.getElementById("wipe-text").style.animation = "wipein 1s linear,wipeout 1s linear 2s";
                setTimeout(() => {

                        document.getElementById("wipe-text").innerHTML = "";
                        document.getElementById("wipe-text").style.animation = "";
                }, 3000); i++;
                for(let o = 0; o < document.getElementsByClassName("orange").length ; o++ ){
                         document.getElementsByClassName("orange")[o].style.color = "white";
                }
        } else {
                i = 0;
                document.getElementById("wipe-text").innerHTML="HOENIX";
        }

},3100);

