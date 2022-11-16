const balloon = document.querySelector("p");

function inflate(){
   let balloonSize = Number(balloon.style.fontSize.replace("px",""));
   balloonSize *= 1.1;
   balloonSize = balloonSize + "px";
   balloon.style.fontSize = balloonSize;
}

function deflate(){
   let balloonSize = Number(balloon.style.fontSize.replace("px",""));
   balloonSize *= 0.9;
   balloonSize = balloonSize + "px";
   balloon.style.fontSize = balloonSize;
}

function onKeyDownArrowUp(event){
   if(event.key !== "ArrowUp") return;

   event.preventDefault();

   if(event.repeat) return;

   inflate();

   if(Number(balloon.style.fontSize.replace("px","")) > 100 ){
      balloon.innerText = "💥";
      window.removeEventListener("keydown",onKeyDownArrowUp);
   }
}

function onKeyDownArrowDown(event){
   if(event.key !== "ArrowDown") return;

   event.preventDefault();

   if(event.repeat) return;

   deflate();
}

window.addEventListener("keydown",onKeyDownArrowUp);
window.addEventListener("keydown",onKeyDownArrowDown);