var randomNumbers1 =Math.floor( Math.random()*6)+1;
var images1 = `dice${randomNumbers1}.png`;
var randomImges1 = `images/${images1}`;

var img1 = document.querySelectorAll("img")[0];
img1.src = randomImges1;



var randomNumbers2 = Math.floor(Math.random()*6) +1;
var images2 = `dice${randomNumbers2}.png`;
var randomImges2 = `images/${images2}`;

var img2 = document.querySelectorAll("img")[1];
img2.src = randomImges2;


if(randomNumbers1>randomNumbers2){
    document.querySelector("h1").innerText="Player 1 Wins";
}
else if(randomNumbers1<randomNumbers2){
    document.querySelector("h1").innerText="Player 2 Wins";
}
else{
    document.querySelector("h1").innerText="draw";
}


let play = ()=>{
    window.location.reload();
}