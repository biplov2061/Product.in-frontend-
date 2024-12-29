let username = document.getElementById("username");
let number = document.getElementById("number");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");


let button = document.querySelector("button");

button.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(username.value === "" || password.value === "" || number.value === "" || confirm_password.value === ""){
        alert("Please fill all the areas of form");
    }
     else if(username.value.length < 5 || username.value.length > 20){
        alert('invalid username');
    }else if(isNaN(number.value)){
        alert('Please enter digits only');
    }else if(password.value.length < 8){
        alert('Password must be of 8 characters');
    }else if(password.value!= confirm_password.value){
        alert('Please enter same password');
    }else{
        alert('Your data has been submitted');
    }
});