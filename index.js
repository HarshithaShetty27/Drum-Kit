for(var i=0;i<(document.querySelectorAll(".drum").length);i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        var buttonInner=this.innerHTML;
        switch(buttonInner)
        {
            case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            return tom1.play();
            break;
            case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            return tom2.play();
            break;
            case "s":
            var tom3= new Audio('sounds/tom-3.mp3');
            return tom3.play();
            break;
            case "d":
            var audio= new Audio('sounds/tom-4.mp3');
            return audio.play();
            break;
            case "j":
            var audio= new Audio('sounds/snare.mp3');
            return audio.play();
            break;
            case "k":
            var audio= new Audio('sounds/crash.mp3');
            return audio.play();
            break;
            case "l":
            var audio= new Audio('sounds/kick-bass.mp3');
            return audio.play();
            break;
            default: console.log(buttonInner);
        }
        
    });
}

