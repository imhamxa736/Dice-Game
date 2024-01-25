var randomnumber1 = Math.floor((Math.random()*6)+1);
var random_img1= "images/dice"+ randomnumber1 + ".png";

document.querySelectorAll('img')[0].setAttribute('src',random_img1);

var randomnumber2= Math.floor((Math.random()*6)+1);
var random_img2= 'images/dice'+ randomnumber2 +'.png';

document.querySelectorAll('img')[1].setAttribute('src',random_img2);

if (randomnumber1>randomnumber2){
    document.querySelector('h1').innerHTML='Player 1 won';
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 won";
}
else{
    document.querySelector('h1').innerHTML="It's a Draw."
}
