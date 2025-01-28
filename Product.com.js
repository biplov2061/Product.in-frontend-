let input = document.querySelector("#last-input");
// let btn = document.getElementById("signin");
let search_product = document.querySelector(".search-product");
// let search_product_btn = document.getElementById("search");
let box = document.querySelector("#box");
let cartValue = document.getElementById("number");

let body = document.querySelector("body");
let container1 = document.querySelector(".container-1");
let container2 = document.querySelector(".container-2");
let clothes = document.querySelector(".clothes");
let header = document.querySelector(".header");
let companyName = document.querySelector(".companyName");
let btnMode = document.querySelector(".modeBtn");

//variable for cart notification
let cart_value = 0;

//add to cart button logic for shoe section

let adidas = document.querySelector(".adidas");
let nike_1 = document.querySelector(".nike-1");
let goldstar = document.querySelector(".goldstar");
let nike_2 = document.querySelector(".nike-2");

//function to bring add to cart tick

let flag = true;

adidas.addEventListener("click", (e) => {
  e.preventDefault();
  adidas.innerText = "Add to Cart ✅";
  // if(flag === false){
  //     adidas.innerText = "Add to Cart";
  //     flag = true;
  // }else{
  //     flag = false;
  // }
});

nike_1.addEventListener("click", () => {
  nike_1.innerText = "Add to Cart ✅";
});

goldstar.addEventListener("click", () => {
  goldstar.innerText = "Add to Cart ✅";
});

nike_2.addEventListener("click", () => {
  nike_2.innerText = "Add to Cart ✅";
});

//add to cart button logic for clothes section

let t_shirt = document.querySelector(".t-shirt");
let frock = document.querySelector(".frock");
let girl_inner = document.querySelector(".girl-inner");
let lehenga = document.querySelector(".lehenga");

t_shirt.addEventListener("click", () => {
  t_shirt.innerText = "Add to Cart ✅";
});

frock.addEventListener("click", () => {
  frock.innerText = "Add to Cart ✅";
});

girl_inner.addEventListener("click", () => {
  girl_inner.innerText = "Add to Cart ✅";
});

lehenga.addEventListener("click", () => {
  lehenga.innerText = "Add to Cart ✅";
});

//sign in form validation

function Signin() {
  if (input.value != "") {
    alert("Email submitted !");
  } else {
    alert("please enter your email address");
  }
}

//function to detect the blank or null search

function SearchProduct() {
  if (search_product.value != "") {
    alert("product unavailable");
    search_product.innerText = " ";
  } else {
    alert("please enter product name");
  }
}

// function to add the cart notification

function add_to_cart() {
  cart_value = cart_value + 1;
  box.style.backgroundColor = "red";
  cartValue.innerText = cart_value;
}

//onload event to load login form

function load_login() {
  window.location.href = "Login.html";
}

//light and dark mode toggle

let mode = "light";


function changeMode() {
  if (mode === "light") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    container1.className = "dark";
    container2.className = "dark";
    clothes.className = "dark";
    header.className = "dark_header";
    btnMode.innerText = "☀️";
    btnMode.style.backgroundColor = "white";
    mode = "dark";
  }
  else{
    body.style.backgroundColor = "white";
    body.style.color = "black";
    container1.className = "light";
    container2.className = "light";
    clothes.className = "light";
    header.className = "light_header";
    btnMode.style.backgroundColor = "black";
    btnMode.innerText = "🌙";
    mode = "light";
  }
}
