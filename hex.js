//hex color numbers
let hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

//target btn
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let nav = document.querySelectorAll(".chg");

function getRandom(){
    //get random num for selecting colors array
    return Math.floor(Math.random()* hex.length);
}
btn.addEventListener("click", function(){
    //put hex color together
    let hexColor = "#";
    for(let i = 0 ; i < 6 ; i++){
        hexColor += hex[getRandom()];
    }
    //change background with each click
    for(let item of nav){
        item.style.color = hexColor;
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    btn.style.backgroundColor =hexColor;
})
