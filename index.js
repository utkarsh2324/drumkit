var number=document.querySelectorAll(".drum").length;

for(var i=0;i<number;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var getelement=this.innerHTML;   
        makesound(getelement);
        soundanimation(getelement);
    });}

document.addEventListener("keypress",function(event){
        makesound(event.key);
        soundanimation(event.key);
        small(event.key)
    });
    







function makesound(key){
switch(key){
    case "W":
        var tom1=new Audio("sound/tom-1.mp3");
        tom1.play();
      break;
    case "A":
        var tom2=new Audio("sound/tom-2.mp3");
        tom2.play();
        break;
    case "S":
            var tom3=new Audio("sound/tom-3.mp3");
            tom3.play();
            break;
    case "D":
                var tom4=new Audio("sound/tom-4.mp3");
                tom4.play();
                break;
    case "J":
                    var snare=new Audio("sound/snare.mp3");
                    snare.play();
                    break;
    case "K":
                        var kick=new Audio("sound/kick-bass.mp3");
                        kick.play();
                        break;
    case "L":
                            var crash=new Audio("sound/crash.mp3");
                            crash.play();
                            break;
                            case "w":
                                var tom1=new Audio("sound/tom-1.mp3");
                                tom1.play();
                              break;
                            case "a":
                                var tom2=new Audio("sound/tom-2.mp3");
                                tom2.play();
                                break;
                            case "s":
                                    var tom3=new Audio("sound/tom-3.mp3");
                                    tom3.play();
                                    break;
                            case "d":
                                        var tom4=new Audio("sound/tom-4.mp3");
                                        tom4.play();
                                        break;
                            case "j":
                                            var snare=new Audio("sound/snare.mp3");
                                            snare.play();
                                            break;
                            case "k":
                                                var kick=new Audio("sound/kick-bass.mp3");
                                                kick.play();
                                                break;
                            case "l":
                                                    var crash=new Audio("sound/crash.mp3");
                                                    crash.play();
                                                    break;
                default: 
          
                            var aaudio=new Audio("sound/crash.mp3");
                            aaudio.play();
                            break;
}
}


function soundanimation(currentkey){
    var activeButton=document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}