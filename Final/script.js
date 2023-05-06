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
        var view1 = new imgQuote("imgs/helmet.png","Fully rendered scene of a Space Marine helmet in a war torn landscape ",);
        myArray.push(view1);
        var view2 = new imgQuote("imgs/bread.png","Render of a loaf of bread",);
        myArray.push(view2);
        var view3 = new imgQuote("imgs/tavern.png","Fully rendered scene of a fantasy tavern",);
        myArray.push(view3);
        var view4 = new imgQuote("imgs/eight.png","Render of an eight sided die",);
        myArray.push(view4);
        var view5 = new imgQuote("imgs/mug.png","Render of fantasy tavern style mug",);
        myArray.push(view5);
        var view6 = new imgQuote("imgs/potion.png","Render of a fantasy health potion",);
        myArray.push(view6);
      
       
    }
    //Function to get info from the array to display on the main html page
    function getInfo()
    {
          var randomNumber = Math.floor(Math.random() * myArray.length);
            var newHtml = myArray[randomNumber].toString();
            
            // Fade out the existing set of images and quotes
            $("#Container").fadeOut(500, function() {
              // Replace the HTML with the new set of images and quotes
              $(this).html(newHtml);
              // Fade in the new set of images and quotes
              $(this).fadeIn(500);
            });
          
       
    }
    setInterval(getInfo, 5000);