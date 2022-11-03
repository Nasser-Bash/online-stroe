
   
//page.onload
window.addEventListener('load', () => {
    let loader=document.getElementById("page-loader");
        loader .style.display="block";

    setTimeout(function(){
        loader .style.display="none";
    },1000)
  });
//mobile-sidemenu-toggle
mobilesidemenu();
function mobilesidemenu() {
    let toggle_btns = document.querySelectorAll(".mobile-menu-btn-toggle"),
    close_btn= document.getElementById("mobile-menu-btn-close"),
    mobile_sidemenu=document.getElementById("moblie-toggle-sidebar");
    toggle_btns.forEach(btn => {
        btn.addEventListener("click",function(){
            mobile_sidemenu.classList.add("mobile_sidemenu_active");
        });
        });
    close_btn.addEventListener("click",function(){
        mobile_sidemenu.classList.remove("mobile_sidemenu_active");
    });
}
//
quickview();
function quickview(){
let quicks_view=document.querySelectorAll(".quick"),
quick_view_buttons=document.querySelectorAll(".quick_view_button "),
quick_view_buttons_close=document.querySelectorAll(".quick .close");

    quick_view_buttons.forEach((quick_view_button)=>{
        quick_view_button.addEventListener("click",function(){
            console.log("ok");
            quicks_view.forEach(quick_view =>{
                quick_view.classList.add("active-quick-view");
            })
        })
    })
    quick_view_buttons_close.forEach((quick_view_button_close)=>{
        quick_view_button_close.addEventListener("click",function(){
            quicks_view.forEach(quick_view =>{
                quick_view.classList.remove("active-quick-view");
            })
        })
    })}
   
//
productDisplayStyle();
    function productDisplayStyle() {
        let girdStyle=document.querySelector(".display-icon .gird"),
            listStyle=document.querySelector(".display-icon .list"),
            parent=document.querySelector(".product-items .row"),
            cards=document.querySelectorAll(".product-items .card");
           
            listStyle.addEventListener("click",function () {
                parent.classList.remove("row");
                parent.classList.add("list-display");
                cards.forEach(card => {
                    card.classList.remove("col-sm-6");
                    card.classList.remove("card");
                    card.classList.add("product");
                    card.classList.add("d-block");
                    card.classList.add("d-lg-flex");
                });
            })
             girdStyle.addEventListener("click",function () {
                parent.classList.add("row");
                parent.classList.remove("list-display");
                cards.forEach(card => {
                    card.classList.add("col-sm-6");
                    card.classList.add("card");
                    card.classList.remove("product");
                });
            })
    }


//

  
   
   
