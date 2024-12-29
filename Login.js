let username = document.getElementById("username");
let password = document.getElementById("password");
let submit = document.getElementById("btn");
// let login = document.querySelector("")
let count = 0;

submit.addEventListener("click" , (e)=>{
    e.preventDefault();
 if(count!= 3){
    if(username.value === "" || password.value === ""){
        count++;
        alert("Please fill all form area!");
    }else if(username.value.length <= 4 || username.value.length > 100){
        count++;
        alert("Invalid Username");
    }else if(password.value.length <= 4 || password.value.length > 15){
        count++;
        alert("Invalid passsword")
    }
    else{
       alert('You are logged in');
       window.location.href = "Product.com.html";
        // alert("You are logged in");
    }
 }
 else{
    
    
    document.getElementById("btn").disabled = true;
    document.getElementById("try_again").innerText = "Try again after 5 seconds!";
    setTimeout(() => {
        count = 0;
        document.getElementById("btn").disabled = false;
        document.getElementById("try_again").innerText = "";
        return 
    }, 5000);
 }
   
});






