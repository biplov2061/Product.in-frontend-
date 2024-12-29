const { error } = require("console");
const { response } = require("express");
const { get } = require("http");

let payment = document.getElementById("payment");


payment.addEventListener("click" , (e)=>{
    e.preventDefault();
    window.location.href = "Login.html";
});





