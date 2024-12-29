let cart_box = document.getElementById("box");
let number = document.getElementById("number");
let payment = document.getElementById("payment");
let searchShoe = document.getElementById("searchShoe");



let cart_count = 0;

function Add_to_Cart(){
 cart_count = cart_count + 1;
 cart_box.style.backgroundColor = "red";
 number.innerText = cart_count;
}


function search_shoe(){
    if(searchShoe.value!= ""){
        alert('Shoe not available now');
    }
    else{
        alert('please enter shoe name or brand');
    }
}

