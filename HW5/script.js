var imgNames = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10"];
var imgCover = "imgs/question.jpg";
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
    var imgPath = ["img/hamish.jpg","img/reindeer.jpg","/img/beagle",/]
    var counter = [0,0]
    while(realIMG <4)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
    }
    if(counter[randomNumber] < 2)
    {
        realIMG.push(imgPath[randomNumber]);
        counter[randomNumber] = counter[randomNumber] + 1;
    }
}

function showIMG()
{
    document.getElementById(imageTags[number]).src= actualImages[number];
}
