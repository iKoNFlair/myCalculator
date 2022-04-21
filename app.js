let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");
let screenValue = '';

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
  }
  else if(key == 'Del' || key == 'd' || key == 'D')
  {
      screenValue = screenValue.slice(0,-1);
      screen.value = screenValue;
  }
  else {
      screenValue += key;
      screen.value = screenValue;
  }
}
