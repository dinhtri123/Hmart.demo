
var close_wishlist = document.querySelector(".wishlist__close");
var wishlist__detail = document.querySelector(".wishlist__view");
var close_cart = document.querySelector(".cart__close");
var cart__detail = document.querySelector(".cart__view");
//wishlist
close_wishlist.addEventListener('click', function(){
    wishlist__detail.style.transform = "translateX(100%)";
})
function wishlist(){
    wishlist__detail.style.transform = "translateX(0%)";
}
///cart
function shop(){
    cart__detail.style.transform = "translateX(0%)";
}
close_cart.addEventListener('click', function(){
    cart__detail.style.transform ="translateX(100%)";
})


/////slider
var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n){
    showSlide(slideIndex += n);
}
function showSlide(n){
    var i;
    var slides = document.querySelectorAll(".fade");
    if (n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

/// sticky__menu
window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".header__menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/// nav__mobile
function tab(evt, items){
    var dropdown__mobile = document.querySelectorAll(".dropdown__mobile");
    var i;
    for(i = 0; i < dropdown__mobile.length; i++){
        dropdown__mobile[i].style.display = "none";
    }
    document.getElementById(items).style.display = "block";
}
////nav_items
var list_pages = document.querySelector(".listPages");
var items_pages = document.querySelector(".items_pages");

var list_other = document.querySelector(".listOther");
var items_related = document.querySelector(".items_related");

var list_related = document.querySelector(".listRelated");
var items_other = document.querySelector(".items_other");

var list_shop_page = document.querySelector(".listShopPage");
var items_shop_page = document.querySelector(".itemsShopPage");

var list_product = document.querySelector(".listProduct");
var items_products = document.querySelector(".itemsProducts");

var list_single = document.querySelector(".listSingle");
var items_single = document.querySelector(".itemsSingle");

list_pages.addEventListener('click', function(){
    if(items_pages.style.display == "block"){
        items_pages.style.display = "none"
    }
    else{
        items_pages.style.display = "block"
    }
})
list_other.addEventListener('click', function(){
    if(items_other.style.display == "block"){
        items_other.style.display = "none"
    }
    else{
        items_other.style.display = "block"
    }
})
list_related.addEventListener('click', function(){
    if(items_related.style.display == "block"){
        items_related.style.display = "none"
    }
    else{
        items_related.style.display = "block"
    }
})
list_shop_page.addEventListener('click', function(){
    if(items_shop_page.style.display == "block"){
        items_shop_page.style.display = "none"
    }
    else{
        items_shop_page.style.display = "block"
    }
})
list_product.addEventListener('click', function(){
    if(items_products.style.display == "block"){
        items_products.style.display = "none"
    }
    else{
        items_products.style.display = "block"
    }
})
list_single.addEventListener('click', function(){
    if(items_single.style.display == "block"){
        items_single.style.display = "none"
    }
    else{
        items_single.style.display = "block"
    }
})


/// close_nav
var navMobile = document.querySelector(".nav__mobile");
var close_nav = document.querySelector("#close_nav");
var menu_mb = document.querySelector("#menu_mb");
close_nav.addEventListener('click', function(){
    navMobile.style.transform = "translateX(-100%)"
})
menu_mb.addEventListener('click', function(){
    navMobile.style.transform = "translateX(0%)";
})

///active__products
var change_tab = document.getElementsByClassName("btn_products");
for(var i = 0; i <change_tab.length; i++){
    change_tab[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}


/// change_tab_products
function products(n){
    var btn_products = document.querySelectorAll(".products_content");
    var d;
    for(d = 0; d < btn_products.length; d++){
        btn_products[d].style.display = "none";
    }
    document.getElementById(n).style.display = "flex";
}
///check
function cart(){
    var cart_sticky = document.querySelector(".cart__sticky");
    cart_sticky.style.display = "flex";
}
function cart2(){
    var cart_sticky = document.querySelector(".cart2");
    cart_sticky.style.display = "flex";
}
function cart3(){
    var cart_sticky = document.querySelector(".cart3");
    cart_sticky.style.display = "flex";
}
function cart4(){
    var cart_sticky = document.querySelector(".cart4");
    cart_sticky.style.display = "flex";
}
function cart5(){
    var cart_sticky = document.querySelector(".cart5");
    cart_sticky.style.display = "flex";
}
function cart6(){
    var cart_sticky = document.querySelector(".cart6");
    cart_sticky.style.display = "flex";
}
function cart7(){
    var cart_sticky = document.querySelector(".cart7");
    cart_sticky.style.display = "flex";
}
function cart8(){
    var cart_sticky = document.querySelector(".cart8");
    cart_sticky.style.display = "flex";
}

// close__check
function cart_close(){
    var cart_check = document.querySelector(".cart__sticky");
        cart_check.style.display = "none";
}
function cart_close2(){
    var cart_check = document.querySelector(".cart2");
        cart_check.style.display = "none";
}
function cart_close3(){
    var cart_check = document.querySelector(".cart3");
        cart_check.style.display = "none";
}
function cart_close4(){
    var cart_check = document.querySelector(".cart4");
        cart_check.style.display = "none";
}
function cart_close5(){
    var cart_check = document.querySelector(".cart5");
        cart_check.style.display = "none";
}
function cart_close6(){
    var cart_check = document.querySelector(".cart6");
        cart_check.style.display = "none";
}
function cart_close7(){
    var cart_check = document.querySelector(".cart7");
        cart_check.style.display = "none";
}
function cart_close8(){
    var cart_check = document.querySelector(".cart8");
        cart_check.style.display = "none";
}

/////images_products
var imgview =document.querySelectorAll(".img_view");
var imgfull =document.querySelector(".imgfull");

imgview[0].addEventListener('click',function(){
    imgfull.src = imgview[0].src;
})
imgview[1].addEventListener('click',function(){
    imgfull.src = imgview[1].src;
})
imgview[2].addEventListener('click',function(){
    imgfull.src = imgview[2].src;
})


////close_view

function view_close(){
    var cart_view = document.querySelector(".cart__view__products");
    cart_view.style.display = 'none'
}
function view(){
    document.querySelector(".cart__view__products").style.display = "flex"
}