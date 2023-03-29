 document.addEventListener('DOMContentLoaded', function () {
   let dot = document.querySelectorAll('.chuyenslide ul li');
   let slides = document.querySelectorAll('.cacslide ul li');
   let timeSlide = setInterval(autoSlide, 3000)
   // dot return is array

   for (let index = 0; index < dot.length; index++) {
     dot[index].addEventListener('click', function () {
          clearInterval(timeSlide);
       // bo tat cac cac phan tu mau den
       for (let i = 0; i < dot.length; i++) {
         dot[i].classList.remove('kichhoat')
       }
       this.classList.add('kichhoat')
       /*  console.log(this.previousElementSibling); */
       //xu ly tinh vi tri 
       let nutActive = this;
       //console.log('vi tri ban dau ' + nutActive.previousElementSibling);
       let positionBtn = 0;
       for (positionBtn = 0; nutActive = nutActive.previousElementSibling; positionBtn++) {
         /* console.log('bien i = ' + i);
         console.log('nut kich hoat ' + nutActive); */
       }
       //console.log("vi tri kich hoat " + positionBtn );
       // buoc 1: cho tat ca slide an di = remove
       for (let k = 0; k < slides.length; k++) {
         slides[k].classList.remove('active');
         slides[positionBtn].classList.add('active')
       } // het su kien cho nut
     })
   }
   /*      let timeSlide = setInterval(function(){console.log('Count !');
        },1000) */
   // tu chuyen slide
   function autoSlide() {
       let psSlide = 0;
       let slideNow = document.querySelector('.cacslide ul li.active');
       //console.log(slideNow);
       for (psSlide = 0; slideNow = slideNow.previousElementSibling; psSlide++) {}
          console.log('position of slide present ' + psSlide);
         // neu chua cen slide cuoi cung 
          if(psSlide < slides.length - 1){       
          for (let k = 0; k < slides.length; k++) {
               slides[k].classList.remove('active');
               dot[k].classList.remove('kichhoat')
             }
             slides[psSlide].nextElementSibling.classList.add('active');
             dot[psSlide].nextElementSibling.classList.add('kichhoat');
         } else {
          for (var i = 0; i < slides.length; i++) {
               slides[i].classList.remove('active');
               dot[i].classList.remove('kichhoat');
          }
          // cho phan tu tiep theo cua slide hien thi ra 
          slides[0].classList.add('active');
          dot[0].classList.add('kichhoat');       
         }     
     }

   /* chuyen slide */
   /* tinh vi tri cua object */
   /* previousSibling: tra ve phan tu truoc no  */

 }, false);
