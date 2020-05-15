window.onload = function()
{
    
    var flag  = true;
    var pointStop = true;
    const menu = this.document.querySelector("nav");
    var nav_link = this.document.querySelectorAll(".menu>ul>li>a");
    var counter = this.document.querySelectorAll(".block-single-counter .single-counter h1");
    
    
    
//Xử lý phần thay đổi nền nav
window.addEventListener("scroll",function () {

    if(window.pageYOffset > 100){
        if(flag){
            menu.classList.add("change-bg");
            flag = false; 
        } 
    }
    else if(window.pageYOffset <= 100){
        console.log(flag);
        if(flag === false){
        menu.classList.remove("change-bg");
        flag  = true;
        }
        
    }
  });
//Xử lý scroll chuot
// b1:ngăn ko cho nó chuyển trang
// b2:tính được vị trí của các phần tử cần chuyển đến
// b3:addclass animation

    counter.forEach(counters =>{
        counters.innerText = '0';
        const updateCounter = () => {
            const target = +counters.getAttribute('data-target');
             const c = +counters.innerText;
             const increment = target / 1000;
         if(c < target){
                counters.innerText = Math.ceil(c+increment);
                this.setTimeout(updateCounter,1);
             }
             else{
                counters.innerText = target;
             }
        }
        updateCounter();
    });

    //   $(".carosel-slide").slick({
    //     dots: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 2
    //   });

};