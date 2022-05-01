let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");
let screenValue = '';

let switchBtn = document.querySelector(".btn-switch");
let container = document.querySelector(".container");
let scientificBtns = document.querySelectorAll(".scientific");

switchBtn.addEventListener("click", function(){
    container.classList.toggle('max-container');
   for(let i=0; i<scientificBtns.length; i++)
    {
        scientificBtns[i].classList.toggle("scientific-unhide");
    }
})

console.log("btn =" ,btn.length);

for(items of btn)
{   
    items.addEventListener("click", (e) => {
    
    e.target.classList.toggle("btn-click");
    setTimeout(() => {
        e.target.classList.toggle("btn-click");
    }, 100);

    let buttonText = e.target.innerText;
    calc(buttonText);
    })
}

document.addEventListener("keypress", (e) => {
   
//    for(let i=0; i<btn.length; i++)
//    {
//        classList.toggle("btn-click");
//        setTimeout(() => {
//            e.target.classList.toggle("btn-click");
//        }, 100);
//    }

console.log(e.key);
calc(e.key);


})

function calc(key){
    if(key == 'X' || key == '*')
    {
        key = '*';
        screenValue += key;
        screen.value = screenValue;
    }
    else if(key == 'C' || key == 'c')
  {
      screenValue = '';
      screen.value = 0;
  }
    else if(key == '=' || key == "Enter")
  {
      screenValue = eval(screenValue);
      screen.value = screenValue;

    //   if()
  }
    else if(key == 'Del' || key == 'd' || key == 'D')
  {   
      screenValue = screenValue.slice(0,-1);
      screen.value = screenValue;
  }
   else if(key == "Sin")
     {   
        //  screenValue = Math.sin(screenValue*Math.PI/180);
         screenValue += "Sin";
         screen.value = screenValue;
     }
  else {
      screenValue += key;
      screen.value = screenValue;
  }
}

let x=45;
console.log(Math.sin(x*Math.PI/180))
console.log(Math.cos(x*Math.PI/180))
console.log(Math.tan(x*Math.PI/180))
