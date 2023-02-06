const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const result = document.querySelector("#result");

// Add event listener for left button
leftBtn.addEventListener("click",function(){
result.innerHTML = "You find a path that leads you towards a cave. Will you enter?";
leftBtn.innerHTML = "Enter the cave";
rightBtn.innerHTML = "Go back from where you came";

leftBtn.addEventListener("click", function() {
    result.innerHTML = "You find the treasure inside the cave!";
  });
  
  rightBtn.addEventListener("click", function() {
    result.innerHTML = "You went back home and found no treasure, how sad";
  });
});

// Add event listener for right button
rightBtn.addEventListener("click",function(){
    result.innerHTML = "You make your way to a vast canyon. Do you try to find a way across?";
    rightBtn.innerHTML = "Find a safe crossing";
    leftBtn.innerHTML = "Nah I can make it. I'm gonna jump it";
    
    rightBtn.addEventListener("click", function() {
        result.innerHTML = "You find a bridge and cross safely. A little goblin gives you a gold coin";
      });
      
      leftBtn.addEventListener("click", function() {
        result.innerHTML = "You really thought you could make it? You fell to your foolish death";
      });
    });
