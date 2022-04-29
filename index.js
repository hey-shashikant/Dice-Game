randomnumber1 = Math.floor(Math.random()*6)+1;
image_1 = "images/" + "dice" + randomnumber1 + ".png";
final_image_1 = document.querySelectorAll("img")[0];
final_image_1.setAttribute("src",image_1);


randomnumber2 = Math.floor(Math.random()*6)+1;
image_2 = "images/" + "dice" + randomnumber2 + ".png";
final_image_2 = document.querySelectorAll("img")[1];
final_image_2.setAttribute("src",image_2);

if(randomnumber1 < randomnumber2){
    document.querySelector("h1").textContent = "Player 2 Won";
}
else if(randomnumber1 > randomnumber2){
    document.querySelector("h1").textContent = "Player 1 Won";
}
else{
    document.querySelector("h1").textContent = "Draw";
}