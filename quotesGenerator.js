const body = document.body;
const button2 = document.querySelector("button");
const heading = [
  "Let's start our evening with new quote",
  "Let's start our night with new quote"
]
const quotes = [
  "Get busy living or get busy dying. — Stephen King",
  "You only live once, but if you do it right, once is enough. — Mae West",
  "Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison"
]
const intervalId = () => {
  const red = Math.floor(Math.random() * 226);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green}, ${blue})`;
  body.style.background = rgb;
  body.button2.backgroundColor = rgb;
};

  
    button2.addEventListener("click", () => {
       for(let i = 0; i<2; i++){
      if(heading[0]){
          document.getElementById("h1").innerHTML = heading[0];
        }
        else{
          document.getElementById("h1").innerHTML = heading[1];
        }
      }
      document.getElementById("p1").innerHTML = quotes;
      
        setTimeout(intervalId);
        button2.textContent = rgb;
  });

