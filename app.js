//test colors
let colors = ["#b28fce", "#336774", "#ab3b3a", "#6a8372", "#86c166", "#d9cd90", "#f75c2f"];

//target btn
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let nav = document.querySelectorAll(".chg");

function getRandom(){
    //get random num for selecting colors array
    return Math.floor(Math.random()* colors.length);
}

btn.addEventListener("click", function(){
    //change background with each click
    let randomNum = getRandom();
    for(let item of nav){
        item.style.color = colors[randomNum];
    }
    color.textContent = colors[randomNum];
    document.body.style.backgroundColor = colors[randomNum];
})
