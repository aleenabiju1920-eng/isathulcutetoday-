// Loading screen

window.onload = function(){

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },3000);

}




function startStory(){

    alert("Our story begins here ❤️");

}
function startScan(){


let bar=document.getElementById("progress");

let result=document.getElementById("result");

let certificate=document.getElementById("certificate");


if(bar){

bar.style.width="100%";


result.innerHTML=
"Scanning Athul... ❤️";


setTimeout(()=>{


result.innerHTML=
"Analysis Complete!";


certificate.style.display="block";


},3000);


}


}
function openMessage(type){


let box=document.getElementById("message-box");


box.style.display="block";


if(type==="miss"){

box.innerHTML=

"❤️ If you are reading this, you probably miss me. Remember that somewhere someone is smiling because you exist. I miss you too, Athu.";

}



if(type==="sad"){

box.innerHTML=

"🤍 Bad days don't last forever. Remember you are loved, appreciated, and never alone. Take care of yourself.";

}



if(type==="smile"){

box.innerHTML=

"😂 Emergency smile treatment activated! Remember you are officially stuck with an annoying girlfriend who loves you a lot.";

}



if(type==="sleep"){

box.innerHTML=

"🌙 Close your eyes, relax, and remember that tomorrow is another beautiful day. Sleep well, Athu ❤️";

}


}
function unlockLetter(){


let password =
document.getElementById("password").value;


let letter =
document.getElementById("letter");


if(password.toLowerCase()==="moorachi"){

letter.style.display="block";

}

else{

alert("Wrong password 😂 Try again!");

}


}




// Birthday Countdown

let birthday =
new Date("August 5, 2026 00:00:00").getTime();



setInterval(function(){


let now =
new Date().getTime();



let distance =
birthday-now;



let days =
Math.floor(distance/(1000*60*60*24));


let hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));


let minutes =
Math.floor((distance%(1000*60*60))/(1000*60));


let seconds =
Math.floor((distance%(1000*60))/1000);



let count =
document.getElementById("countdown");


if(count){

count.innerHTML =
days+" Days "+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds";

}



},1000);