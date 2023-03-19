// Create array for collecting information
var myArray = new Array();

//create a single class that contains an image, title, description, author, image year
class combineID
{
    constructor(image,title,description,author,date)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.date = date;
    }
   
    toString()
    {
        return `<div><img src="${this.image}" alt="${this.title}"><h2>${this.title}</h2><p>${this.description}</p><p> ${this.author}</p><p>Date: ${this.date}</p></div>`;
        
    }
   
}
 function createArray()
    {
        var view1 = new combineID("imgs/Art 1.jpg","Equilibrium","Equilibrium highlights the rapid extinction of sea creatures and the vulnerability of their precious ecosystems","Created by: Mat Miller","2019");
        myArray.push(view1);
        var view2 = new combineID("imgs/Art 2.jpg","Coral Garden","Barragão visualizes the effects of coral bleaching—a phenomenon that starves and eventually kills coral. The plush wall hanging gradually changes from rich hues on one side to a white, muted palette on the other.","Created by: Vanessa Barragao","2019");
        myArray.push(view2);
        var view3 = new combineID("imgs/Art 3.jpg","Poumons des océans","Each piece showcases the dazzling textures and diverse forms of coral, but they also visualize how vulnerable our reefs are","Created by: Aude Bourgine ","2018");
        myArray.push(view3);
        var view4 = new combineID("imgs/Art 4.png","Anyone Can Save The Ocean","The plastic bag represents the ocean and a sea turtle is trapped inside. A plastic bag is stuck on its head making it the bags victim. The person is the injurer since the person is the consumer of the bag. ","Created by: Becky Ni","2017");
        myArray.push(view4);
        var view5 = new combineID("imgs/Art 5.jpg","Coralium","From fringing reefs to stoney barnacles, the stunning wall-mounted artwork brims with a multitude of lush textures, just like its real-life counterpart (if healthy). Hipolytes choice of medium allows her to express the fragility of the underwater ecosystem, which is sadly in danger due to coral mining, pollution, and warming temperatures.","Created by: Mlle Hipolyte","2018");
        myArray.push(view5);
    }

    function getInfo()
    {
        var randomNumber = Math.floor(Math.random() * myArray.length);
        document.getElementById("title").innerHTML = myArray[randomNumber].toString();
       
        

    }