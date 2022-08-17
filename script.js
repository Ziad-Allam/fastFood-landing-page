const foodImage = document.querySelector(".plate-image img"),
    plateItem1 = document.querySelector("#plate1"),
    plateItem2 = document.querySelector("#plate2"),
    plateItem3 = document.querySelector("#plate3"),
    button = document.querySelector(".btn");

plateItem1.addEventListener("click", () => {
    foodImage.src = "images/Chicken Noodles.png";
    button.innerHTML = "$25 --- Buy Now";
})

plateItem2.addEventListener("click", () => {
    foodImage.src = "images/Panner Noodles.png";
    button.innerHTML = "$18 --- Buy Now";
})

plateItem3.addEventListener("click", () => {
    foodImage.src = "images/Grilled Chicken.png";
    button.innerHTML = "$33 --- Buy Now";
})

