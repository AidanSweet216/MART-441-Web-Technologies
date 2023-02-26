// an array of image element names in the HTML document
var imgNames = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10"];

// a string representing the file path of the placeholder image
var imgCover = "imgs/question.jpg";

// an empty array to hold the paths of the ten images to be displayed
var realIMG = new Array();

// a variable to store the randomly generated number
var randomNumber;

// a function to set all image elements to the placeholder image
function createCovers()
{
    // call the createImageArray function to randomly select the images
    createImageArray();

    // iterate through each image element and set its source to the placeholder image
    for(var i = 0; i < imgNames.length; i++)
    {
        document.getElementById(imgNames[i]).src= imgCover;
    }
}

// a function to randomly select ten images
function createImageArray()
{
    // an array of file paths for the ten images
    var imgPath = ["imgs/hamish.jpg","imgs/reindeer.jpg","imgs/beagle.jpg","imgs/bird.jpg","imgs/calf.jpg","imgs/cat.jpg","imgs/fergus.jpg","imgs/field.jpg","imgs/statue.jpg","imgs/trees.jpg"]

    // an array to keep track of how many times each image has been selected
    var counter = [0,0,0,0,0,0,0,0,0,0,0]

    // loop until the realIMG array contains ten images
    while(realIMG.length < 10)
    {
        // generate a random number between 0 and 10
        var randomNumber = Math.floor(Math.random(0,10) * imgPath.length)

        // check if the selected image has not been selected before
        if(counter[randomNumber] <= 0)
        {
            // add the image to the realIMG array
            realIMG.push(imgPath[randomNumber]);

            // set the counter value for the selected image to itself
            counter[randomNumber] = counter[randomNumber];
        }
    }   
}

// a function to show an image when clicked by setting its source to the corresponding path in the realIMG array
function showIMG(number)
{
    document.getElementById(imgNames[number]).src= realIMG[number];
}
