const switcher = document.querySelector(".switch");
const toggle = document.getElementById("toggle-switch");
const price1 = document.querySelector(".price-1");
const price2 = document.querySelector(".price-2");
const price3 = document.querySelector(".price-3");

toggle.addEventListener("click", () => {
    if(price1.textContent === "19.99"){
        price1.innerHTML = "199.99";
        price2.innerHTML = "249.99";
        price3.innerHTML = "399.99";
    }else{
        price1.innerHTML = "19.99";
        price2.innerHTML = "29.99";
        price3.innerHTML = "39.99";
    }
});