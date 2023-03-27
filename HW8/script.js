//var to store array
var myArray = new Array();

//class to contain an image and quote
class imgQuote
{
    constructor(image,quote)
    {
        this.image = image;
        this.quote = quote;
    }
   
    toString()
    {
        return `<div><img src="${this.image}" alt="an image to be accompanied by a quote"><h2>${this.quote}</h2></div>`;
        
    }
}
//Create the array of images and quotes
function createArray()
    {
        var view1 = new imgQuote("imgs/Gman.jpg","The right man in the wrong place can make all the difference in the world.-The G-man",);
        myArray.push(view1);
        var view2 = new imgQuote("imgs/BT.PNG","Protocol one: link to Pilot. Protocol two: uphold the mission. Protocol three: protect the Pilot.-BT 7274",);
        myArray.push(view2);
        var view3 = new imgQuote("imgs/scout.jpg","Grass grows, birds fly, sun shines, and brother, I hurt people.-Scout",);
        myArray.push(view3);
      
       
    }
    //Function to get info from the array to display on the main html page
    function getInfo()
    {
          var randomNumber = Math.floor(Math.random() * myArray.length);
            var newHtml = myArray[randomNumber].toString();
            
            // Fade out the existing set of images and quotes
            $("#info").fadeOut(500, function() {
              // Replace the HTML with the new set of images and quotes
              $(this).html(newHtml);
              // Fade in the new set of images and quotes
              $(this).fadeIn(500);
            });
          
       
    }
    setInterval(getInfo, 5000);
    setInterval(moveNFade,3000);
    setInterval(showSquare,4000);
    function moveNFade()
    {
        $("#square").animate({left:100}).animate({top:200}).fadeOut(1500).fadeIn(500).animate({left:1500}).fadeOut(500);
    }
    function hideSquare()
    {
        $("#square2").hide();
    }
    function showSquare()
    {
        $("#square2").fadeIn(500).animate({left:1500}).animate({top:200}).fadeOut(500).fadeIn(700).animate({left:100}).fadeOut(500);
        
    }
    