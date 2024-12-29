let add_cart = document.getElementById('addCart');
let cart_item_count = document.getElementById('number');
let cart_box = document.getElementById('box');


/*Clothes search js*/
let SearchCloth = document.getElementById('search_cloth');



let cart_count = 0;

function Add_to_Cart(){
    cart_count++;
    cart_item_count.innerText = cart_count;
    cart_box.style.backgroundColor = 'red';
}



function search_cloth(){
    if(SearchCloth.value!= ""){
        alert('Cloth not available');
    }
    else
    {
        alert('Please enter cloth name or brand');
    }
}




