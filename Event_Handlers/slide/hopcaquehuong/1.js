 document.addEventListener('DOMContentLoaded', function(){
     let status = true;
     let wpb_wrapper = document.querySelector('.wpb_wrapper');
     let btn_dot = document.querySelectorAll('.changeSlide ul li');
     let Slides = document.querySelectorAll('.allSlide ul li');
     let sc_item_title = document.querySelectorAll('.sc_button_video .row .col');
     let timeSlide = setInterval(autoSlide, 3000)

     //button choice

     for (let a = 0; a < sc_item_title.length; a++) {
          sc_item_title[a].addEventListener('click', function () {
               for (let b = 0; b < sc_item_title.length; b++) {
                  //  console.log('hello');
                    
                    sc_item_title[b].classList.remove('active_sc');
               }
               this.classList.add('active_sc')
          })
     }


     for (let i = 0; i < btn_dot.length; i++) {
          btn_dot[i].addEventListener('click', function () {
               clearInterval(timeSlide);
               for (let k = 0; k < btn_dot.length; k++) {  
                    btn_dot[k].classList.remove('ActiveDot');
               }       
               let nutActive = this;
               //console.log('vi tri ban dau ' + nutActive.previousElementSibling);
               let l = 0;
               for (l = 0; nutActive = nutActive.previousElementSibling; l++) { 
                      // console.log('bien i = ' + l);
                }

                /* click dot for next slide */

               for (let i = 0; i < Slides.length; i++) {
                    Slides[i].classList.remove('active');
                    Slides[l].classList.add('active');
               }
          })

     // bay gio var j se bang so thu tu j = j + 1
          
     }
     window.addEventListener('scroll', function() {     
          if ( status == true) {
               if ( window.pageYOffset > 100) {
                    status = false;
                    wpb_wrapper.classList.add('pst-fix')
               } 

          }else if (window.pageYOffset <= 100) {
               status = true;
               wpb_wrapper.classList.remove('pst-fix')
          } 
     
    });
     function autoSlide() {
     let psSlide = 0;
     let slideNow = document.querySelector('.allSlide ul li.active');
      for (psSlide = 0; slideNow = slideNow.previousElementSibling; psSlide++) {
     }
     console.log(psSlide);

     // console.log('position of slide present ' + psSlide); 
     if(psSlide <Slides.length - 1) {
          for (let k = 0; k < Slides.length; k++) {
               Slides[k].classList.remove('active');
               //btn_dot[k].classList.remove('ActiveDot') 
              }
              Slides[psSlide].nextElementSibling.classList.add('active');
             // console.log(btn_dot);
             // btn_dot[psSlide].nextElementSibling.classList.add('ActiveDot');
          }else{
               for (let k = 0; k < Slides.length; k++) {
                    Slides[k].classList.remove('active');
                    //btn_dot[k].classList.remove('ActiveDot') 
                   }
                   Slides[0].nextElementSibling.classList.add('active');
                  // console.log(btn_dot);
                 //  btn_dot[0].nextElementSibling.classList.add('ActiveDot')
     
          }
     } 


}, false);
