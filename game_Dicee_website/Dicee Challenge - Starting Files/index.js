var randomnumber1 = Math.random() ;

randomnumber1 = Math.floor((randomnumber1*6) + 1);



var randomnumber2 = Math.random() ;

randomnumber2 = Math.floor((randomnumber2*6) + 1);



image1 = "dice"+randomnumber1 +".png";

image2 = "dice"+randomnumber2 +".png";

document.getElementsByClassName("img1")[0].setAttribute("src","images/"+image1); //It gives a list of elements and a single element needs to be selected

document.getElementsByClassName("img2")[0].setAttribute("src","images/"+image2);


if(randomnumber1 > randomnumber2)
document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player1wins";

if(randomnumber1 < randomnumber2)
document.getElementsByTagName("h1")[0].innerHTML = "Player2wins 🚩";

if(randomnumber1 === randomnumber2)
document.getElementsByTagName("h1")[0].innerHTML = "Draw";
