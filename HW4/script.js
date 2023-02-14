function getAnswer1(){
    var Answer = document.getElementById("answer").value;
    var Question = document.getElementById("question");
    if(Answer === "Left")
    {
        document.getElementById("answer").style.display="none";
        document.getElementById("submit").style.display="none";
        
        document.getElementById("answer2").style.display="inline";
        document.getElementById("submit2").style.display="inline";
        document.body.style.backgroundImage = "url(/HW4/imgs/Bog.jpg)";
        

        Question.innerHTML = "You go left and find yourself at the entrance to an enchanted bog. Do you enter or turn around?";
    }

    else if(Answer === "Right")
    {
        document.getElementById("answer").style.display="none";
        document.getElementById("submit").style.display="none";
        
        document.getElementById("answer3").style.display="inline";
        document.getElementById("submit3").style.display="inline";
        document.body.style.backgroundImage = "url(/HW4/imgs/ravine.jpg)";
        document.body.style.color="black";
        

        Question.innerHTML = "You go right and find yourself at large ravine. Do you look for a way across or jump?";
    }

    else
    {
        Question.innerHTML = "Invalid Answer"
    }
}
function getAnswer2(){
    var Answer = document.getElementById("answer2").value;
    var Question = document.getElementById("question");
    if(Answer === "Enter")
    {
        document.getElementById("answer2").style.display="none";
        document.getElementById("submit2").style.display="none";
        
        document.getElementById("answer4").style.display="inline";
        document.getElementById("submit4").style.display="inline";
        

        Question.innerHTML = "You enter the enchanted bog and are trapped forever. Or are you? squirm your way out don't just give up";
    }

    else if(Answer === "Leave")
    {
       
        

        Question.innerHTML = "Good decision, You could have gotten stuck in that bog for this many years " + getNumber();
    

    }

    else
    {
        Question.innerHTML = "Invalid Answer"
    }
}

function getNumber(){
    return Math.random(1,10);
 
}
function getAnswer3(){
    var Answer = document.getElementById("answer3").value;
    var Question = document.getElementById("question");
    if(Answer === "Jump")
    {
       
        

        Question.innerHTML = "You fall to your death, what were you expecting to happen?";
    }

    else if(Answer === "Bridge")
    {
        document.getElementById("answer3").style.display="none";
        document.getElementById("submit3").style.display="none";
        
        document.getElementById("answer5").style.display="inline";
        document.getElementById("submit5").style.display="inline";
        

        Question.innerHTML = "Great choice, you find a bridge and cross. This leads you to an abandoned castle full of treasure. Do you take some coin or leave it? ";
    

    }

    else
    {
        Question.innerHTML = "Invalid Answer"
    }
}
function getAnswer5(){
    var Answer = document.getElementById("answer5").value;
    var Question = document.getElementById("question");
    if(Answer === "Take")
    {
       
        

        Question.innerHTML = "You turn to solid gold and stay amongst the treasure for eternity";
    }

    else if(Answer === "Leave")
    {
       
        

        Question.innerHTML = "Good decision, You probably shouldn't touch mysterious gold it might be cursed";
    

    }

    else
    {
        Question.innerHTML = "Invalid Answer"
    }
}
function getAnswer4(){
    var Answer = document.getElementById("answer4").value;
    var Question = document.getElementById("question");
    if(Answer === "Squirm")
    {
       
        

        Question.innerHTML = "Congratulations you escaped the bog";
    }

    else if(Answer === "Give up")
    {
       
        

        Question.innerHTML = "Thats a shame, you probably could have escaped";
    

    }

    else
    {
        Question.innerHTML = "Invalid Answer"
    }
}