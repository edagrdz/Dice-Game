//1 - 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

//dice1.png - dice6.png
var image1 = "images/dice"+randomNumber1+".png"; 
var image2 = "images/dice"+randomNumber2+".png"; 

/* the next code will change the image to the attribute "src"  */
document.querySelector(".dice .img1").setAttribute("src",image1);
document.querySelector(".dice .img2").setAttribute("src",image2);

/* the next code will change the Title depending on which player wins */
if (image1 > image2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!!"; // if Player 1 wins
} else if (image2 > image1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!!"; // if Player 2 wins
} else {
    document.querySelector("h1").innerHTML="Draw!"; //Draw result 
}



