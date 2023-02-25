var imgNames = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10"];
var imgCover = "/imgs/question.jpg";
var realIMG = new Array();

function createCovers()
{
    createImageArray();
    for(var i = 0; i < imgNames.length; i++)
    {
        document.getElementById(imgNames[i]).src= imgCover;
    }
}

function createImageArray()
{
    var imgPath = ["imgs/hamish.jpg","imgs/reindeer.jpg","/imgs/beagle.jpg","/imgs/bird.jpg","/imgs/calf.jpg","/imgs/cat.jpg","/imgs/fergus.jpg","/imgs/field.jpg","/imgs/statue.jpg","/imgs/trees.jpg"]
    var counter = [0,0]
    while(realIMG < 10)
    {
        var randomNumber = Math.floor(Math.random() * imgPath.length)
    }
    if(counter[randomNumber] < 0)
    {
        realIMG.push(imgPath[randomNumber]);
        counter[randomNumber] = counter[randomNumber] + 1;
    }
}

function showIMG()
{
    document.getElementById(imgNames[randomNumber]).src= realIMG[randomNumber];
}
