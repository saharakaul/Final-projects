'use strict';
document.getElementById('frappucino').addEventListener('click', frappucino)

function frappucino() {
    document.body.style.backgroundImage = "url(newbackground2.png)"
    document.getElementById('heading').innerHTML = "Design your own drink!"
    document.getElementById('heading').style.color = "black";
    document.getElementById('heading').style.fontFamily = "'Pacifico'"
    document.getElementById('paragraph').innerHTML = "Do You Want A Hot Drink Or A Cold Drink?"

    // Create a button element and add it to the page
    let pEl = document.createElement("p");
    let coldBtnEl = document.createElement("button");
    let hotBtnEl = document.createElement("button");
    coldBtnEl.innerHTML = "COLD";
    hotBtnEl.innerHTML = "HOT";
    hotBtnEl.id = "hot";
    coldBtnEl.id = "cold";
    hotBtnEl.addEventListener("click", selectHot);
    coldBtnEl.addEventListener("click", selectCold)
    pEl.append(hotBtnEl);
    pEl.append(coldBtnEl);

    document.body.append(pEl);
}

function selectHot() {
    console.log("HOT");
    let hotBtnEl = document.getElementById('hot');
    let coldBtnEl = document.getElementById('cold');
    document.getElementById('frappucino').src = "starbuckshotdrinkcup.jpeg";
    document.getElementById('paragraph').innerHTML = "Do you want coffee or tea?"
    document.getElementById('hot').innerHTML = "Tea";
    document.getElementById('cold').innerHTML = "Coffee";
    hotBtnEl.id = "tea";
    coldBtnEl.id = "coffee";
    document.getElementById('tea').addEventListener("click", selectTea);
    document.getElementById('coffee').addEventListener("click", selectCoffee)
}

function selectCold() {
    console.log("COLD");
    let hotBtnEl = document.getElementById('hot');
    let coldBtnEl = document.getElementById('cold');
    document.getElementById('frappucino').src = "colddrinkcup.jpg";
    document.getElementById('paragraph').innerHTML = "Do you want coffee or a refresher?"
    document.getElementById('hot').innerHTML = "Coffee";
    document.getElementById('cold').innerHTML = "Refresher";
    hotBtnEl.id = "coldcoffee";
    coldBtnEl.id = "refresher";
}

function selectCoffee() {
    console.log("COFFEE");
    let pEl = document.createElement("p");
    let coffeeBtnEl = document.createElement("button");
    let hotBtnEl = document.createElement("button");
    coldBtnEl.innerHTML = "COLD";
    hotBtnEl.innerHTML = "HOT";
    hotBtnEl.id = "hot";
    coldBtnEl.id = "cold";
    hotBtnEl.addEventListener("click", selectHot);
    coldBtnEl.addEventListener("click", selectCold)
    pEl.append(hotBtnEl);
    pEl.append(coldBtnEl);

    document.body.append(pEl);

}

function selectTea() {
    console.log("TEA");
}