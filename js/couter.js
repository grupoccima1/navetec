let valueDisplays = document.querySelectorAll(".numero");
let interval= 3000; 

var win = $(window);
win.scroll(contador);

function contador() {
    valueDisplays.forEach(valueDisplays => {
        let startValue = 0; 
        let endValue = parseInt(valueDisplays.getAttribute("data-val"));
        console.log(endValue);
        let duration = Math.floor(interval / endValue);
        let couter = setInterval(function () {
          startValue += 1; 
          valueDisplays.textContent = startValue;
          if (startValue == endValue){
            clearInterval(couter);
          }  
        },duration);
        
    });
}

